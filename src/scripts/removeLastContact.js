import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (Array.isArray(contacts) && contacts.length > 0) {

      const removeContact = contacts.pop();

      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

      console.log("Deleted contact", removeContact);
    } else {
      console.log('Not found');
    }
  } catch (error) {
    console.error(error);
  }

};

await removeLastContact();
