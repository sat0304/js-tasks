"use strict";

const FIRSTNUM = '19900';
const SECONDNUM = '990099';
const FIRSTNUM2 = '18899900';
const SECONDNUM2 = '9901';

class CalculNum {

  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.result = '';
    this.numberLength = 0;
    // this.plus = '+';
    // this.minus = '-';
    // this.asterisk = '*';
    // this.slash = '/';
  }

  reverseString( str ){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) { 
      newString += str[i];
  }
    return newString;
  }  
  
  fillZeros(){
    let firstNumLength = this.firstNumber.length;
    let secondNumLength = this.secondNumber.length;
    this.numberLength = Math.max(firstNumLength, secondNumLength);

    if (firstNumLength > secondNumLength) {
      let newString = '';
      let offset = firstNumLength - secondNumLength;
      for (let i = 0; i < offset; i++) { 
        newString += '0';
        }
      for (let i = 0; i < secondNumLength; i++) { 
        newString += this.secondNumber[i];
      }
      this.secondNumber = newString;
      return this.secondNumber;
    } else {
      let newString = '';
      let offset = secondNumLength - firstNumLength;
      for (let i = 0; i < offset; i++) { 
        newString += '0';
        }
      for (let i = 0; i < firstNumLength; i++) { 
        newString += this.firstNumber[i];
      }
      this.firstNumber = newString;
      return this.firstNumber;
    }

  }

  sumTwoNumbers(){
    let carry = 0;
    for (let i = this.numberLength - 1; i >= 0 ; i--){
        this.result += String((
           +this.firstNumber[i] + 
           +this.secondNumber[i] +
           carry) % 10);
        carry = Math.trunc((
          +this.firstNumber[i] +
          +this.secondNumber[i] +
          carry) / 10);
          // alert(carry);
        // alert( this.firstNumber[i], this.result[i], this.secondNumber[i] );
      }
      if (carry == 1) this.result += 1;
      
    return this.reverseString(this.result);
  }

  subtractionTwoNumbers(){
    let carry = 0;

    for (let i = this.numberLength - 1; i >= 0 ; i--){
      if ((+this.firstNumber[i] - +this.secondNumber[i]) <= 0) {
        this.result += ((
           +this.firstNumber[i] - 
           +this.secondNumber[i] +
           10 +
           carry) % 10);
        carry = - 1;
      } else {
        this.result += ((
          +this.firstNumber[i] - 
          +this.secondNumber[i] +
          carry) % 10);
       carry = 0;
        //  alert(carry);
      }
        // alert( this.firstNumber[i], this.result[i], this.secondNumber[i] );
      }
      
    return this.reverseString(this.result);
  }

  multTwoNumbers() {
    let aFactor = this.reverseString(this.firstNumber);
    let bFactor = this.reverseString(this.secondNumber);

    let stack = [];
    
    for (let i = 0; i < aFactor .length; i++) {
      for (let j = 0; j < bFactor.length; j++) {
          let mediumMult = aFactor [i] * bFactor[j];
          stack[i + j] = (stack[i + j]) ? stack[i + j] + mediumMult : mediumMult;
        }
      }
    
      for (let i = 0; i < stack.length; i++) {
        let numRank = stack[i] % 10;
        let moveNumber = Math.floor(stack[i] / 10);
        stack[i] = numRank;
    
        if (stack[i + 1])
          stack[i + 1] += moveNumber;
        else if (moveNumber != 0)
          stack[i + 1] = moveNumber;
      }
    
      return this.reverseString(stack);
    }

  divTwoNumbers() {
    let firstDivident = this.firstNumber ;
    let secondDivider = this.secondNumber;

    let numLength = firstDivident.length;
    let remainder = 0;
    let quotient = '';
    let i = 0;

    while( i < numLength + 3){
      let digit = i < numLength ? parseInt(firstDivident[i]) : 0;
      
      if (i == numLength){
      quotient = quotient + '.';
      }

      quotient = quotient + Math.floor((digit + (remainder * 10)) / secondDivider);
      remainder = (digit + (remainder * 10)) % secondDivider;
      i++;
  }
  return parseFloat(quotient);
  }

}

let resultNum = new CalculNum( FIRSTNUM, SECONDNUM );
alert( FIRSTNUM );
alert( SECONDNUM );
alert(resultNum.fillZeros());
alert( 'Sum of two numbers is ' + resultNum.sumTwoNumbers() );

resultNum = new CalculNum( FIRSTNUM2, SECONDNUM2 );
alert( FIRSTNUM2 );
alert( SECONDNUM2);
alert( resultNum.fillZeros() );
alert( 'Substraction of two numbers is ' + resultNum.subtractionTwoNumbers() );

resultNum = new CalculNum( FIRSTNUM, SECONDNUM );
alert( FIRSTNUM );
alert( SECONDNUM );
alert( 'Mult of two numbers is ' + resultNum.multTwoNumbers() );

resultNum = new CalculNum( FIRSTNUM2, SECONDNUM2 );
alert( FIRSTNUM2 );
alert( SECONDNUM2 );
alert( 'Division of two numbers is ' + resultNum.divTwoNumbers() );

