import { AddContact } from "../Models/ContactsService.model";
import { ApiBase } from "./ApiBase";

export class ContactsService extends ApiBase
{
    async GetContacts()
    {
        return await this.client.get("contacts/");
    }

    async GetContactList()
    {
        return await this.client.get("contacts");;
    }

    async AddContact(AddContact : AddContact)
    {
        return await this.client.post("/contacts",
            {
                data : AddContact
            }
        );
    }
}