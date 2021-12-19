(function () {
  document.addEventListener("DOMContentLoaded", function () {
    createProductItems();
    addCounter();
    lessCounter();
    removeItem();
  });
})();




function createProductItems() {
  var products = JSON.parse(localStorage.getItem('products'));
  var cartItemsContainer = document.getElementById('cart-items-container');

  products.forEach(function (element, index) {
    var cartItem = `
    <div id="cart-item-${index}" class="Cart-Items py-4 my-3 row col-12" style="border: 1px solid gray;">
    <div class="image-box mb-4 col-12 col-md-3">
        <img src="${products[index].image}" style="height: 150px;" />
    </div>
    <div class="about col-6 col-md-3 row justify-content-start">
        <h1 class="title">${products[index].title}</h1>
        <p class="subtitle">${products[index].info}</p>
    </div>
    
    <div class="col-6">
        <div class="counter row justify-content-end">
            <button id="add-${index}" class="btn add">+</button>
            <div id="count-${index}" class="count mx-2">1</div>
            <button id="less-${index}" class="btn less">-</button>
        </div>
    
        <div class="prices">
            <div class="my-2">
            <span id="item-cost-${index}" class="item-cost">1800</span>
            <span class="mx-1">EGP</span>
            </div>
            <button id="remove-${index}" class="remove"><u>Remove</u></button>
        </div>
    </div>
    </div>
    `;

    cartItemsContainer.insertAdjacentHTML('beforeend', cartItem);
    calcTotal();
  });
}




function removeItem() {
  var cartItemsContainer = document.getElementById('cart-items-container');
  var oldProducts = JSON.parse(localStorage.getItem('products'));
  var removeBtns = Array.from(document.getElementsByClassName('remove'));

  removeBtns.forEach(function (element, index) {
    element.addEventListener('click', function () {
      oldProducts.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(oldProducts));
      cartItemEl = document.getElementById(`cart-item-${index}`);
      cartItemsContainer.removeChild(cartItemEl);
      calcTotal();
    });
  });
}







function addCounter() {
  var addBtns = Array.from(document.getElementsByClassName('add'));

  addBtns.forEach((element, index) => {
    element.addEventListener('click', function () {
      var counterEl = document.getElementById(`count-${index}`);
      var counter = parseInt(counterEl.innerText);

      counter++;
      counterEl.innerText = counter;
    });
  })
}




function calcTotal() {
  var itemsCost = Array.from(document.getElementsByClassName('item-cost'));
  var totalAmontEl = document.getElementById('total-amount');
  var totalCost = 0;

  itemsCost.forEach(function (element) {
    totalCost = totalCost + parseInt(element.innerText);
  });

  totalAmontEl.innerText = totalCost;
}




function lessCounter() {
  var lessBtns = Array.from(document.getElementsByClassName('less'));

  lessBtns.forEach((element, index) => {
    element.addEventListener('click', function () {
      var counterEl = document.getElementById(`count-${index}`);
      var counter = parseInt(counterEl.innerText);

      counter--;
      if (counter < 0) {
        counter = 0;
      }
      counterEl.innerText = counter;
    });
  })
}