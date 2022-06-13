const contactsOperations = require('./contacts');
// const argv = require('yargs').argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            const result = await contactsOperations.listContacts()
            console.table(result);
        break;

        case 'get':
        // ... id
        break;

        case 'add':
        // ... name email phone
        break;

        case 'remove':
        // ... id
        break;

        default:
        console.warn('\x1B[31m Unknown action type!');
    }
}

// invokeAction(argv);

invokeAction({action:'list'})