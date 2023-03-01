'use strict';

const STR = 'The quick, brown .fox ,jumps over.the lazy ,dog.';
const NAMEOFSOMETHING = 'bAlAnErTop';
const RUSTRSPASES = 'Вот пример строки,в которой     используются\
 знаки препинания.После знаков должны стоять пробелы , а перед\
  знаками их быть не должно . ';
const RUSTRUNIQUE = 'Текст, в котором слово текст несколько\
 раз встречается и слово тоже';

class StringRepair {

  constructor( strToRepair ) {
    this.strToRepair = strToRepair;
    this.spaces = ' ';
    this.dotSign = '.';
    this.comaSign = ',';
    this.originWords = {};
  }

  titleString(){
    let firstString = this.strToRepair[0].toUpperCase();
    let secondString = this.strToRepair.toLowerCase();
    this.strToRepair = firstString + secondString.slice(1,);
    
    return this.strToRepair;
  }

  spaceTrimmer(){
    let originalStrLength = this.strToRepair.length;
    let strForExtraSpaces = '';


    for (let i = 0; i < originalStrLength; i++){
      if (this.strToRepair[i] == this.dotSign ||
         this.strToRepair[i] == this.comaSign) {
          strForExtraSpaces += this.strToRepair[i] + this.spaces;
          continue;
      }
      strForExtraSpaces += this.strToRepair[i];
    }

    let strForDeletedSpaces = '';
    let spacedStrLength = strForExtraSpaces.length;

    for (let i = 0; i < spacedStrLength ; i++){
      if (strForExtraSpaces[i] == this.spaces &&
         (strForExtraSpaces[i+1] == this.comaSign ||
          strForExtraSpaces[i+1] == this.dotSign ||
          strForExtraSpaces[i+1] == this.spaces)) {
          continue;
      }
      strForDeletedSpaces += strForExtraSpaces[i];
    }
    this.strToRepair = strForDeletedSpaces.slice(0,-1);
    
    return this.strToRepair;
  }

  wordCounterInString(){
    let counterWords = 0;
    let originalStrLength = this.strToRepair.length;

    if (this.strToRepair.length != this.spaces) counterWords = 1;

    for (let i = 0; i < originalStrLength; i++){
      if (this.strToRepair[i] == this.spaces) counterWords += 1;
      }
    
    return counterWords;
    }

  originWordCounting(){
    let originalStrLength = this.strToRepair.length;
    let strForOriginals = '';

    for (let i = 0; i < originalStrLength ; i++){
      if (this.strToRepair[i] == this.comaSign ||
          this.strToRepair[i] == this.dotSign) {
          continue;
          }
      strForOriginals  += this.strToRepair[i].toLowerCase();
      }
    
    const words = strForOriginals.split(' ');

    for (let i = 0; i < words.length ; i++){
      if (!(words[i] in this.originWords)) {
        this.originWords[words[i]] = 1;
      } else {
        this.originWords[words[i]] += 1;
      }
    }
    
    return this.originWords;
  }
}


let strNew = new StringRepair( NAMEOFSOMETHING );
alert( NAMEOFSOMETHING );
alert( strNew.titleString() );
alert('String length is ' + strNew.wordCounterInString() );

strNew = new StringRepair( STR );
alert( STR )
alert( strNew.spaceTrimmer() );
alert( 'String length is ' + strNew.wordCounterInString() );

strNew = new StringRepair( RUSTRSPASES );
alert( RUSTRSPASES );
alert( strNew.spaceTrimmer() );
alert( 'String length is ' + strNew.wordCounterInString() );

strNew = new StringRepair( RUSTRUNIQUE );
alert( RUSTRUNIQUE );
alert( 'String length is ' + strNew.wordCounterInString() );
alert( JSON.stringify(strNew.originWordCounting(), null, 4) );
