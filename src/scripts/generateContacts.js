import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';



function generateFakeContacts(amount) {
  const contacts = [];
  for (let i = 0; i < amount; i++) {
    contacts.push(createFakeContact());
  }
  return contacts;
}

const addContactsToFile = async (fileName, amount) => {
  try {

    let fileData = '[]';

    try {
      fileData = await fs.readFile(fileName, 'utf8');
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.log(`Файл ${fileName} не знайдений. Створюємо новий файл.`);
      } else {
        throw err;
      }
    }

    const contacts = JSON.parse(fileData);

    const newContacts = generateFakeContacts(amount);

    contacts.push(...newContacts);

    await fs.writeFile(fileName, JSON.stringify(contacts, null, 2));
    console.log(`${amount} нових контактів додано до файлу ${fileName}`);
  } catch (error) {
    console.error('Сталася помилка при обробці файлу:', error);
  }
};


addContactsToFile(PATH_DB, 3);


