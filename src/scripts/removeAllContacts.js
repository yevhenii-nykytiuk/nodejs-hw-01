import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  const contacts = await readContacts();

  while(contacts.length) {
    contacts.pop();
  }

  return writeContacts(contacts);
};

console.log(await removeAllContacts());
