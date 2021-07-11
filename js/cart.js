/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let carts;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartlocal')) || [];
  console.log(cartItems)
 
  carts = new Cart(cartItems.items);

   console.log(carts)
   
    

}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)



function clearCart() {

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

}

function showCart() {

  // TODO: Find the table body
  let tablebody = document.getElementById('tbodyid');
  // TODO: Iterate over the items in the cart
  for(let i=0; i<2;i++)
  // TODO: Create a TR
 { let trEL = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tdELname = document.createElement('td');
  tdELname.textContent= `${carts}`
  trEL.appendChild(tdELname)
  let tdELqun = document.createElement('td');
  tdELqun.textContent=
  trEL.appendChild(tdELqun)
  tablebody.appendChild(trEL)
  table.appendChild(tablebody)

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
 }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();