let store = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
};

function saveStore(){
    localStorage.setItem("cart", JSON.stringify(store.cart));
}
