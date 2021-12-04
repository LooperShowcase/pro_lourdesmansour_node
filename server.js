const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);
function createUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}
createUser(1, "jane", "new york");
function readUser(id) {
  return users[id];
}

function updateusers(id, name, city) {
  if (users[id] == undefined) {
    throw "ayo user is not here";
  } else {
    users[id] = {
      name: name,
      city: city,
    };
  }
}
updateusers("1", "john", "LA");
function deleteusers(id) {
  delete users[id];
}

console.log(users);
let dataToString = JSON.stringify(users);
fs.writeFileSync("db.json", dataToString);
