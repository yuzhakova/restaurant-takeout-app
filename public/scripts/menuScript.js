$(() => {

  const createMenuItemElement = function(item) {

    const stringifiedItems =
      `<div class="menu_display">
          <img  class="user" src="${item.thumbnail_url}">
          <div class="menu-info-and-button">
            <div class="menu_info">
              <p class="item-name">${item.name}</p>
              <p class="item-description">${item.description}</p>
              <p class="item-price">$ ${(item.price / 100)}</p>
            </div>
            <div id="all-buttons">
              <div id="quantity-section">
                <button data-quantity-decrease-id="${item.id}"class="quantity-controller">-</button>
                <label id="display${item.id}">0</label>
                <button data-quantity-increase-id="${item.id}"class="quantity-controller">+</button>
              </div>
              <button data-product-id="${item.id}" class="add-to-cart" type="button">Add To Cart</button>
            </div>
            </div>
       </div>
        `;

    return $(stringifiedItems);
  };

  let counter = 0;

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


      $('.quantity-controller').click(function(event) {
        if ($(this).data('quantity-increase-id')) {
          //$(#display)
        }

      })

      $(".add-to-cart").click(function(event) {
        const menuId = $(this).data("product-id")
        const itemId = menuItems[menuId - 1].id;
        const itemName = menuItems[menuId - 1].name;
        const itemPrice = ((menuItems[menuId - 1].price) / 100);
        event.preventDefault();

          $.ajax({
            method: 'POST',
            url: '/checkout',
            data: { id: itemId, name: itemName, price: itemPrice }
          })

        });
    });




});



