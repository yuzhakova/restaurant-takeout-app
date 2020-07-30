const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  let confirmedItems = {};

  router.post("/", (req, res) => {      // JSON-only route for AJAX POST
    let selectedMenuItem = req.body;
    console.log()
    const items = selectedMenuItem.itemInfo;
    for (let item in items) {
      confirmedItems[item] = items[item].qty;
    }
    res.end();
  });

  router.get("/", (req, res) => {

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', confirmedItems);
    res.render("confirmation", { confirmedItems });
    });
  return router;
};
