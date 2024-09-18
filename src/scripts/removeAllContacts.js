import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {

  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  while(contacts.length) {
    contacts.pop();
  }
  return await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

await removeAllContacts();
