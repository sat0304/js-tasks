"use strict";

const FIRSTNUM = '19900';
const SECONDNUM = '990004567800123999';
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
    let bigFirstNumber = BigInt(this.firstNumber);
    let bigSecondNumber = BigInt(this.secondNumber);
    let bigResult = BigInt(bigFirstNumber * bigSecondNumber);

    return String(bigResult);
  }

  divTwoNumbers() {
    let bigFirstNumber = BigInt(this.firstNumber);
    let bigSecondNumber = BigInt(this.secondNumber);
    let bigResult = BigInt(bigFirstNumber / bigSecondNumber);

    return String(bigResult);
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

