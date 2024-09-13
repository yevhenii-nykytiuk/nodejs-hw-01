import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {

  const contacts = await readContacts();

  if (Array.isArray(contacts) && contacts.length > 0) {
    contacts.pop();
  }

  return writeContacts(contacts);
};


console.log(await removeLastContact());
