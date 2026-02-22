const { getUsers } = require("../controllers/users")

const userRoutes = (req, res, body) => {
  if (req.method === 'GET' && req.url === '/users') {
    return getUsers(req, res);
  }
  if (req.method === 'POST' && req.url === '/users') {
    return getUsers(req, res, body);
  }
}

module.exports = userRoutes;