import { ApiBase } from "../API/ApiBase";
import { createApiFixture } from "../Helpers/create-api-fixtures";
import { ContactsService } from "../API/ContactsService";

export type ApiService = 
{
    ContactsService : ContactsService;
}

export const apiservice = 
{
    ContactsService : createApiFixture(ContactsService)
};