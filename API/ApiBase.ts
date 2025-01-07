import { APIRequest, APIRequestContext, APIResponse, request } from "@playwright/test";

export class ApiBase
{
    protected readonly client : APIRequestContext;

    constructor(requestContext : APIRequestContext)
    {
      this.client = requestContext;
    }


}