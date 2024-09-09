// import {writeContacts} from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
// import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (amount) => {
  const array = [];
  for (let i = 0; i < amount; i++) {
   array.push(createFakeContact());
  }

  return array;
};

console.log(generateContacts(4));



