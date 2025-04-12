
let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById('cart').innerHTML = cart.map(p => `<li>${p}</li>`).join('');
  updateWA();
}

function updateWA() {
  const msg = "Hola Planeta Trevare! Quiero hacer un pedido:%0A%0A" + cart.map(p => `• ${p}`).join('%0A') + "%0A%0AForma de entrega: Delivery%0APago: Efectivo";
  document.getElementById('wa-link').href = "https://wa.me/5492271414132?text=" + msg;
}
