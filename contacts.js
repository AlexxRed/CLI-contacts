const fs = require('fs/promises');
// const fs = require('fs').promises;
const path = require('path');
const contactsPath = 1

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


// TODO: задокументировать каждую функцию
async function listContacts() {
    const result = await fs.readFile('./db/contacts.json', 'utf-8');
    const contacts = JSON.parse(result);
    return contacts;
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};