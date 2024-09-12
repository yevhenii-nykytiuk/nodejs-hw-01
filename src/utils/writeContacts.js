import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
  try {
    const contacts = await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    return contacts;
  } catch (error) {
    console.log("Error", error);
  }
};

writeContacts([createFakeContact()]);









