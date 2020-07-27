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
            <button data-product-id="${item.id}" class="add-to-cart" type="button" class="btn btn-success">Add To Cart</button>
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
      $(".add-to-cart").click(function(event) {
        console.log($(this).data("product-id"))
        event.preventDefault();

          $.ajax({
            url: '/checkout/',
            method: 'POST'
          })

        });
      console.log("rendered add-to-cart buttons")
    });




});



