const bcrypt = require("bcrypt");
console.log(`APP_KEY="${bcrypt.hashSync(Date.now().toString(), 10)}"`);
