const mod = require('../models/userModel');

function loadProfile(req,res) {
  let dbQuery = mod.getAllUsers()
  dbQuery.then((data) => {
      res.send(data.rows)
  })
    .catch(() => res.send("<h1>Error: request for getting users failed</h1>"))
}

module.exports = {
  loadProfile
}