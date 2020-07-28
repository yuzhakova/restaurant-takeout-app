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

              <body>
              <input type="button" value="+" id="inc" onclick="incNumber()"/>
              <input type="button" value="-" id="dec" onclick="decNumber()"/>

              <label id="display">0</label>

              <script type="text/javascript">

              let i = 0;

              function incNumber() {
                  if (i < 10) {
                      i++;
                  } else if (i = 10) {
                      i = 0;
                  }
                  document.getElementById("display").innerHTML = i;
              }

              function decNumber() {
                  if (i > 0) {
                      --i;
                  } else if (i = 0) {
                      i = 10;
                  }
                  document.getElementById("display").innerHTML = i;
              }
              </script>
          </body>


              <button data-product-id="${item.id}" class="add-to-cart" type="button" class="btn btn-success">Add To Cart></button>
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



