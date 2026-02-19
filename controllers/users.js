const { users } = require('../data/store');

const getUser = (req, res) => {
  res.end(JSON.stringify(users));
}

const createUser = (req, res, body) => {
  const newUser = {
    id: Date.now(),
    name: body.name
  }
  users.push(newUser);
  res.end(JSON.stringify(newUser));
}

module.exports = { getUser, createUser };