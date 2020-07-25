/* NY notes:
- folder routes, file users.js: need to change db for getUsers?
- serjer.js: need to require helpers file using const = dbHelpers = require (./helpers/database.js')(db)
and also add app.use("/api/users", usersRoutes(database))
*/

module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: 'SELECT * FROM users;',
    }
    return db.query(query).then(result => result.rows)
  }
  return {
    getUsers,
  }

  const getUserWithEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };
    return db.query(query).then((result) => result.rows[0]);
  };
};

