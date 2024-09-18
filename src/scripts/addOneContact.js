import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
   const data = await fs.readFile(PATH_DB, 'utf-8');
   const contacts = JSON.parse(data);

   const fakeContacts = createFakeContact();
    contacts.push(fakeContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log('New contact', fakeContacts);

  } catch (error) {
    console.error(error);
  }

 };


console.log(await addOneContact());




