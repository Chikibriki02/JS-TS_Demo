import { AddContact } from "../Models/ContactsService.model";
import { test, expect } from "../test";

test('GET-запрос к API contacts', async ({ContactsService}) => {
  console.log("token = " + process.env.API_TOKEN);
var response = await ContactsService.GetContacts();
expect(response.status()).toBe(200); // Проверяем статус ответа
const body = await response.json();
console.log(body);
// Проверяем данные в ответе
});


test.describe( "qwe",() => {
test('GET-запрос к API contactsList', async ({ContactsService}) => {
  var response = await ContactsService.GetContactList();
  expect(response.status()).toBe(200);
  const body : AddContact = await response.json();
  console.log(body);
  });
});

  test('Post-запрос к API add contact', async ({ContactsService}) => {
    var name = "qwereqwe";
    var user : AddContact =
    {
        firstName : `${name}`,
        lastName: "Doe",
        birthdate: "1970-01-01",
        email: "jdoe@fake.com",
        phone: "8005555555",
        street1: "1 Main St.",
        street2: "Apartment A",
        city: "Anytown",
        stateProvince: "KS",
        postalCode : 12345,
        country: "Hungary"
    }
    var response = await ContactsService.AddContact(user);
    expect(response.status()).toBe(201);
    var checkRes = await ContactsService.GetContacts();
    expect(checkRes.status()).toBe(200);
    var contacts : AddContact[] = await checkRes.json();
    var t = contacts.filter(co => co.country === 'USA');
    console.log(t);
    });
  

