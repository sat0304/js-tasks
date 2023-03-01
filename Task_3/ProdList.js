"use strict";

const MATCHSTR = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';
const MATCHSTR2 = 'name-starts-fd&quantity=5';
let products = new Array();

class ProdList {

  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

  get name() {
    return this._name;
    }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  get description() {
    return this._description;
  }
  
  set name(valueName){
    this._name = valueName;

  }
  
  set price(valuePrice){
    this._price = valuePrice;
    // console.log( valuePrice,  this._price);
  }
    
  set quantity(valueQuantity) {
    this._quantity = valueQuantity;
  }

  set description(valueDescription) {    
      this._description = valueDescription;
  }

}

let productPhone = new ProdList( 'iphone', 1000, 500, 'iphone 15SE model' );
// console.log( productPhone.name );
// console.log( productPhone.price );
// console.log(productPhone.quantity);
// console.log( productPhone.description );
let productPencil = new ProdList( 'pencil', 10, 5000, 'black color pencil' );
let productBook = new ProdList( 'fdmon', 258, 11, 'amazing story of abc' );
let productDisk = new ProdList( 'disfdra', 2, 5, 'movie of abc' );
let productMarker = new ProdList( 'fd_marker', 2, 50, 'red clored abc' );
products = [productPhone, productPencil, productBook, productDisk, productMarker];
for (let prod of products) {
  console.log(prod.name)
}

