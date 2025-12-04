function updateCartCount(){
  let c = document.getElementById("cartCount");
  if(c) c.innerText = store.cart.reduce((sum,i)=> sum+i.qty, 0);
}

updateCartCount();

function addItem(name, price, btn){
  store.cart.push({name, price, qty:1});
  saveStore();
  updateCartCount();
  btn.disabled = true;
}

function renderCart(){
  let area = document.getElementById("cartArea");
  area.innerHTML = "";

  let totalCost = 0;
  let totalItems = 0;

  store.cart.forEach((item,i)=>{
    totalItems += item.qty;
    totalCost += item.price * item.qty;

    area.innerHTML += `
      <div class="cart-item">
        <p>${item.name} - $${item.price}</p>
        <button onclick="changeQty(${i},1)">+</button>
        ${item.qty}
        <button onclick="changeQty(${i},-1)">-</button>
        <button onclick="removeItem(${i})">❌</button>
      </div>
    `;
  });

  document.getElementById("totalItems").innerText = totalItems;
  document.getElementById("totalPrice").innerText = totalCost;
  updateCartCount();
}

function changeQty(i, val){
  store.cart[i].qty += val;
  if(store.cart[i].qty <= 0){
    removeItem(i);
  }
  saveStore();
  renderCart();
}

function removeItem(i){
  store.cart.splice(i,1);
  saveStore();
  renderCart();
}
