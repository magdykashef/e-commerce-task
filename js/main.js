(function () {
  document.addEventListener("DOMContentLoaded", function () {
    addToCart();
  });
})();



function addToCart() {
  var addCartBtns = Array.from(document.getElementsByClassName('add-cart-btn'));
  var products = [];
  addCartBtns.forEach((element, index) => {
    element.addEventListener('click', function () {
      console.log(document.getElementById('card-' + index).querySelector('.card-img-top').src);
      products.push({
        image: document.getElementById('card-' + index).querySelector('.card-img-top').src,
        title: document.getElementById('card-' + index).querySelector('.card-title').innerText,
        info: document.getElementById('card-' + index).querySelector('.card-text').innerText
      })
      localStorage.setItem('products', JSON.stringify(products));
    });
  });
}

