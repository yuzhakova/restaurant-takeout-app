$(() => {

  const createMenuItemElement = function(item) {

    const stringifiedItems =
      `<img  class="user" src="${item.thumbnail_url}">
       <p class="item-name">${item.name}</p>
       <p class="item-description">${item.description}</p>
       <p class="item-price">$ ${(item.price / 100)}</p>
       <button>Add to Cart</button>
        `;

    return $(stringifiedItems);
  };


  $.ajax({
    method: "GET",
    url: "/menu/1"
  }).done(res => {
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
    });
});



