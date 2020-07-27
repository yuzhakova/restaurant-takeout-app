/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("menu");
    });

  router.get("/1", (req, res) => {
      db.query(`SELECT * FROM menu_items;`)
        .then(data => {
          let templateVars = data.rows;
          console.log(templateVars)
          res.json( { templateVars})
          //res.render('menu', templateVars)
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    /*templateVars
      .then( res => {
        console.log('NOT FROM FUNCTION', templateVars)
        res.render('menu')
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
  }
        res.send(err)
      })*/

    })

  return router;
};


