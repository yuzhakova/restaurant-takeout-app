const express = require('express');
const router  = express.Router();

module.exports = () => {
  const menuItems = {};

  router.post("/", (req, res) => {
    let selectedMenuItem = req.body;
    console.log('item added', selectedMenuItem)
    const id = selectedMenuItem.id;
    menuItems[id] = {};
    menuItems[id].name = selectedMenuItem.name;
    menuItems[id].price = selectedMenuItem.price;
    res.end();
  })

  router.get("/", (req, res) => {
    console.log('menuItems', menuItems)
    res.render("checkout");
});

  return router;
};
