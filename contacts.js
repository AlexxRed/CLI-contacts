const id = require("bson-objectid");
const fs = require('fs/promises');
// const fs = require('fs').promises;
const path = require('path');


const contactsPath = path.join(__dirname, "db", "contacts.json");

async function updateContact(contact) {
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
}

async function listContacts() {
    const result = await fs.readFile(contactsPath);
    const contacts = JSON.parse(result);
    return contacts;
};

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(book => book.id === contactId);
  if (!result) {
    console.log(`not find contact with id ${contactId}`);
    return null
  }
  return result
};

async function removeContact(contactId) {
  const data = await listContacts();
  const idx = data.findIndex((iteam) => iteam.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = data.splice(idx, 1);
  updateContact(data);
  return removeContact;
};

async function addContact(name, email, phone) {
  const data = await listContacts();
  // console.log(contacts);
  const newContact = {
    name,
    email,
    phone,
    id: id(),
  };
  // console.log(newContact);
  
  data.push(newContact)
  updateContact(data);
  return newContact
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};






// const fileOperations = async (filePath, action = "read", data) => {
//     switch (action) {
//         case "read":
//             const text = await fs.readFile(filePath, "utf-8");
//             // const text = text.toString()
//             console.log(text);
//             break;
//         case "add":
//             await fs.appendFile(filePath, data);
//             break;
//         case "replace":
//             await fs.writeFile(filePath, data);
//             break;
//         default:
//             break;
//     }
// };

// fileOperations('./db/contacts.json', 'read');