"use strict";

const MATCHSTR = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';
const MATCHSTR2 = 'name-starts-fd&quantity-=5';
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
  }
    
  set quantity(valueQuantity) {
    this._quantity = valueQuantity;
  }

  set description(valueDescription) {    
      this._description = valueDescription;
  }

  prodSelect(prodQuery){
    let prodFeatures = prodQuery.split('&');

    let nameParam = prodFeatures[0].split('-');
    let priceParam = prodFeatures[1].split('-');
    let quantityParam = '';
    let descriptionParam = '';

    if (prodFeatures[2] != undefined) {
      quantityParam = prodFeatures[2].split('-');
      descriptionParam = prodFeatures[3].split('-');
    } else {
      quantityParam = priceParam;
    }
    if ((nameParam[1] == 'contains') || (nameParam[1] == 'starts'))  {
      if ((this.name.includes(nameParam[2])) &&
          (this.price == (+priceParam[1][1])) &&
          (this.quantity >(+quantityParam[1][1])) &&
          (this.description.endsWith(descriptionParam[2]))) {
            return this.name;
      } else if ((this.name.startsWith(nameParam[2])) &&
          (this.quantity >(+quantityParam[1][1]))) {
            return this.name;
      } else {
          this.name = 'noMatch';
          return this.name;
      }
    }
  }
}

let productMarker = new ProdList( 'markerfd', 2, 50, 'red clored abc' );
let productBook = new ProdList( 'lfd_moon', 258, 11, 'amazing story of abc' );
let productPhone = new ProdList( 'iphone', 1000, 500, 'iphone 15SE model' );
let productPencil = new ProdList( 'pencil', 10, 5000, 'black color pencil' );
let productDisk = new ProdList( 'disfdra', 2, 5, 'movie of abc' );

products = [productMarker, productBook, productPhone, productPencil, productDisk];
for (let i = 0; i < products.length; i++) {
  products[i].prodSelect( MATCHSTR );
  if (products[i].name == 'noMatch') {
        products.splice(i, 1);
      };
}

for (let i = 0; i < products.length; i++) {
  alert(products[i].name);
  };

  for (let i = 0; i < products.length; i++) {
    products[i].prodSelect( MATCHSTR2 );
    if (products[i].name == 'noMatch') {
          products.splice(i, 1);
        };
  }
  
  for (let i = 0; i < products.length; i++) {
    alert(products[i].name);
    };
