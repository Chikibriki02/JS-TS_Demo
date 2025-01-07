import { FullConfig,Page } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // Ваш код настройки здесь
  console.log('Global setup: выполнение перед всеми тестами');

  // Например, сохранение токена авторизации в переменную окружения
  const token = await authenticateUser();
  console.log("token = " + process.env.API_TOKEN);
  process.env.API_TOKEN = "token";
}

async function authenticateUser(): Promise<string> {
  const response = await fetch('https://thinking-tester-contact-list.herokuapp.com/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'qwe@gmail.com', password: 'qweqweqwe' }),
  });
  const data = await response.json();
  return data.token;
}

class ServiceDI 
{
    private static _services : [{interfaceType : Function, instance : Object}] =[] as any;
    
    public static registerService(interfaceType : Function, instance : Object)
    {
        let record = this._services.find(x=>x.interfaceType === interfaceType);
        if(!record)
        {
            record = {interfaceType : interfaceType, instance : instance};
            this._services.push(record);
        }
        else
        {
            record.instance = instance;
        }
    }

    public static getService(interfaceType : Function) : Object 
    {
        return this._services.find(x=>x.interfaceType === interfaceType);
    }
}

export default globalSetup;