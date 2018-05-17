const fs = require('fs');

fs.writeFile('./src/message.json', '\ufeff{ "message": "Hello world!" }', { encoding: 'utf8' }, error => console.error(error));
