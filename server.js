const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);
function createUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}
createUser(1, "lourdes", "new york");
createUser(2, "idk", "london");
console.log(users);
