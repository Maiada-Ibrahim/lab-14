/* global Product, Cart */

'use strict';
let divEL = document.getElementById('cartContents')
let tbEL = document.getElementById('cart')
let ulEL = document.createElement('ul')
divEL.appendChild(ulEL)


// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

let allproname = []
let allqunt = []
function handleSubmit(event) {
  event.preventDefault();
  let nameofitem = event.target.items.value;
  console.log(nameofitem )
  let numitem = parseInt(event.target.quantity.value)
  allproname.push(nameofitem)
  allqunt.push(numitem)



  let liEL = document.createElement('li')
  liEL.textContent = `${nameofitem} : ${numitem} items`
  ulEL.appendChild(liEL)




  // let trEL = document.createElement('tr')
  // let tdEL = document.createElement('td')
  // tdEL.textContent = nameofitem
  // trEL.appendChild(tdEL)
  // //let numEl = document.getElementById('quantity')
  // let tdqEL = document.createElement('td')
  // tdqEL.textContent = numitem

  // trEL.appendChild(tdqEL)
  // divEL.appendChild(trEL)



  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}




// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  event.preventDefault();

  let nameofitem = event.target.items.value
  //console.log(nameofitem)
  let numitem = parseInt(event.target.quantity.value)
  //console.log(numitem)
  cart.addItem(nameofitem, numitem)

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart

}
 let countEL = document.getElementById('itemCount')
let pEL = document.createElement('p')
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

  pEL.textContent = `${cart.items.length}`
  countEL.appendChild(pEL)

  //console.log(cart.items.length)
}
pEL.textContent = 0
countEL.appendChild(pEL)+9540

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();