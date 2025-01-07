import { test, expect, Page, Locator } from '@playwright/test';
type SelectorType = 'css' | 'xpath' | 'text';
export default class BasePage 
{
    public readonly page : Page
    constructor (Page : Page)
    {
        this.page = Page;
    }

    @step('Go to login page')
    public async GoTOMainPage()
    {
        await this.page.goto('http://localhost:3000/');
    }


   
}

/**
 * @description Decorator to add '@step' annotation to functions in order to have better readability in UI mode and reports
 * @example
 * @step('Select division {0}')
 * async function selectDivision(divisionName: string) {...}
 */
export function step(stepName?: string): any {
    return function decorator(target: Function, context: ClassMethodDecoratorContext) {
      return async function replacementMethod(this: any, ...args: any) {
        // Get the function string representation
        const functionString = target.toString();
        const paramRegex = /\(([^)]*)\)/;
        const paramList =
          paramRegex
            .exec(functionString)?.[1]
            .split(',')
            .map(p => p.trim()) || [];
  
        // A helper function to safely evaluate default values (e.g., _env.VARIABLE)
        const evaluateDefaultValue = (expression: string) => {
          try {
            return expression.startsWith('_env.')
              ? process.env[expression.replace('_env.', '')] // Access environment variable
              : new Function(`return ${expression}`).call(target); // Access context-bound value
          } catch (error) {
            return undefined; // If the variable is not defined or accessible
          }
        };
  
        // Extract default values based on "= value" pattern
        const defaultValues = paramList
          .map(param => param.match(/=\s*([^,)]+)/)?.[1]?.trim())
          .map(value => (value ? evaluateDefaultValue(value) : undefined));
  
        // Fill missing arguments with default values
        const finalArgs = paramList.map((_, index) => (args[index] !== undefined ? args[index] : defaultValues[index]));
  
        let name = stepName || `${this.constructor.name}.${context.name as string}`;
  
        // Replace placeholders like {0}, {1} with actual argument values
        if (stepName) {
          name = stepName.replace(/{(\d+)}/g, (match, index) => {
            return finalArgs[index] !== undefined ? finalArgs[index] : match;
          });
        }
  
        // Run the test step with the resolved step name and arguments
        return test.step(name, async () => target.apply(this, finalArgs));
      };
    };
}