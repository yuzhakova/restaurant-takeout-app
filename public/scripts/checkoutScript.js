function incNumber(item_name) {
  let myDisplay = $(`.display[data-product-id='${item_name}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) + 1;

  myDisplay.text(newNumber);
}

function decNumber(item_name) {
  let myDisplay = $(`.display[data-product-id='${item_name}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) - 1;
  if (newNumber < 0) {
    newNumber = 0;
  }
  myDisplay.text(newNumber);
}

$(() => {
  $('#items_selected').on('click', '.inc', function () {
    const productId = $(this).siblings('.display').data('productId')
    incNumber(productId)
  })
  $('#items_selected').on('click', '.dec', function () {
    const productId = $(this).siblings('.display').data('productId')
    decNumber(productId)
  })
  const createCheckoutItemElement = function (item) {
    console.log(item)
    const stringifiedItems =
      `
      <li class="col-md-4">
        <figure class="itemside mb-3">
          <div class="aside"><img src="${item.image}" class="img-sm border"></div>
          <figcaption class="info align-self-center">
            <p class="title">${item.name}<br></p> <span class="text-muted">$${(item.price / 100)}</span>

            <input type="button" value="+" class="inc"/>
            <input type="button" value="-" class="dec"/>
            <label class="display" data-product-id="${item.name}">${item.qty}</label>


          </figcaption>
        </figure>
      </li>
    `;


    return $(stringifiedItems);
  };

  $.ajax({
    method: "GET",
    url: "/checkout/1"
  })
    .done(res => {

      let checkoutItems = res.menuItems;
      for (let item in checkoutItems) {
        const $checkoutItem = createCheckoutItemElement(checkoutItems[item]);
          $('#items_selected').append($checkoutItem);
      }
      }






  );


});
