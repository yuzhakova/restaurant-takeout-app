function incNumber(item_id) {
  let myDisplay = $(`.display[data-product-id='${item_id}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) + 1;
  if (newNumber === 10) {
    newNumber = Math.floor(Math.random() * 10) + 10;
  }
  myDisplay.text(newNumber);
}

function decNumber(item_id) {
  let myDisplay = $(`.display[data-product-id='${item_id}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) - 1;
  if (newNumber < 0) {
    newNumber = 0;
  }
  myDisplay.text(newNumber);
}

$(() => {

  const createMenuItemElement = function (item) {

    const stringifiedItems =
      `
        <div class="menu_display">
          <img  class="user" src="${item.thumbnail_url}">
          <div class="menu-info-and-button">
            <div class="menu_info">
              <p class="item-name">${item.name}</p>
              <p class="item-description">${item.description}</p>
              <p class="item-price">$ ${(item.price / 100)}</p>
            </div>
            <div class="menu_change">

              <input type="button" value="+" class="inc" onclick="incNumber(${item.id})"/>
              <input type="button" value="-" class="dec" onclick="decNumber(${item.id})"/>
              <label class="display" data-product-id="${item.id}">0</label>
              <button data-product-id="${item.id}" class="add-to-cart" type="button" class="btn btn-success">Add To Cart></button>
            </div>
          </div>
        </div>
      `;

    return $(stringifiedItems);
  };


  $.ajax({
    method: "GET",
    url: "/menu/1"
  })
    .done(res => {
      console.log(res.templateVars)
      let menuItems = res.templateVars;
      for (let item = 0; item < menuItems.length; item++) {
        if (menuItems[item].category === 'main') {
          const $menuItem = createMenuItemElement(menuItems[item]);
          $('#menu_item_mains').append($menuItem);
        } else if (menuItems[item].category === 'soup') {
          const $menuItem = createMenuItemElement(menuItems[item]);
          $('#menu_item_soups').append($menuItem);
        } else if (menuItems[item].category === 'dessert') {
          const $menuItem = createMenuItemElement(menuItems[item]);
          $('#menu_item_desserts').append($menuItem);
        }
      }


      $(".add-to-cart").click(function (event) {
        const menuId = $(this).data("product-id");
        console.log("adding to cart", {menuId})

        const menuItemObject = menuItems.find(item => item.id === menuId);
        // const itemId = menuItemObject.id;
        // const itemName = menuItemObject.name;
        // const itemPrice = ((menuItemObject.price) / 100);

        event.preventDefault();

        $.ajax({
          method: 'POST',
          url: '/checkout',
          // data: { item_id: menuId, qty: 69 },     // TODO: set real quantity, d00d
          data: { item_id: menuId, qty: 69, price: menuItemObject.price, name: menuItemObject.name },     // oh god my eyes, WHY NOT JUST TRUST THE HACKER.  GIVE THEM OUR BANK NUMBER.
          // data: { id: itemId, name: itemName, price: itemPrice }
        })

        // TODO: maybe you want to reset the number to zero?!?
        // TODO: probably tell them that it added it?!?  maybe just a green animated check mark or something?


      });

  });



});
