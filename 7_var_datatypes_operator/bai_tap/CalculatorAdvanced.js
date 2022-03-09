"use strict";

var stringText;
let btnAC = document.getElementById('reset');
let btnDivision = document.getElementById('division');
let btnMulti = document.getElementById('multi');
let btnSub = document.getElementById('sub');
let btnResult = document.getElementById('result');
let btnAdd = document.getElementById('add');
let btnNumZero = document.getElementById('0');
let btnNumOne = document.getElementById('1');
let btnNumTwo = document.getElementById('2');
let btnNumThree = document.getElementById('3');
let btnNumFourth = document.getElementById('4');
let btnNumFive = document.getElementById('5');
let btnNumSix = document.getElementById('6');
let btnNumSev = document.getElementById('7');
let btnNumEight = document.getElementById('8');
let btnNumNine = document.getElementById('9');

btnResult.addEventListener('click', calculate);
btnAC.addEventListener('click', resetText);
btnNumZero.addEventListener('click',clickBtn);
btnNumOne.addEventListener('click',);
btnNumTwo.addEventListener('click',);
btnNumThree.addEventListener('click',);
btnNumFourth.addEventListener('click',);
btnNumFive.addEventListener('click',);
btnNumSix.addEventListener('click',);
btnNumSev.addEventListener('click',);
btnNumEight.addEventListener('click',);
btnNumNine.addEventListener('click',);

function resetText() {
    console.log('click');
    document.getElementById('smallDisplay').innerHTML = "";
    document.getElementById('bigDisplay').innerHTML = "";
}
function calculate() {

}

function clickBtn(){
    console.log('clickBtn');
}










// let stateButton; //1: Rad on, Deg off; 0: Rad off, Deg on
// let btnRad = document.getElementById('radButton');
// let btnDeg = document.getElementById('degButton');
// let btnUnk = document.getElementById('unk');
// let btnParenthesesLeft = document.getElementById('parenthesesLeft');
// let btnParenthesesRight = document.getElementById('parenthesesRight');
// let btnPercent = document.getElementById('percent');
// let btnLnv = document.getElementById('lnv');
// let btnSin = document.getElementById('sin');
// let btnLn = document.getElementById('ln');
// let btnPi = document.getElementById('pi');
// let btnCos = document.getElementById('cos');
// let btnLog = document.getElementById('log');
// let btnE = document.getElementById('e');
// let btnTan = document.getElementById('tan');
// let btnSqrt = document.getElementById('sqrt');
// let btnAns = document.getElementById('ans');
// let btnExp = document.getElementById('exp');
// let btnPow = document.getElementById('pow');
// let btnDot = document.getElementById('dot');

// function eventForKey() {
    // btnRad.addEventListener();
    // btnDeg.addEventListener();
    // btnUnk.addEventListener();
    // btnParenthesesLeft.addEventListener();
    // btnParenthesesRight.addEventListener();
    // btnPercent.addEventListener();
    // btnLnv.addEventListener();
    // btnSin.addEventListener();
    // btnLn.addEventListener();
    // btnDivision.addEventListener();
    // btnPi.addEventListener();
    // btnCos.addEventListener();
    // btnLog.addEventListener();
    // btnMulti.addEventListener();
    // btnE.addEventListener();
    // btnTan.addEventListener();
    // btnSqrt.addEventListener();
    // btnSub.addEventListener();
    // btnAns.addEventListener();
    // btnExp.addEventListener();
    // btnPow.addEventListener();
    // btnDot.addEventListener();
    // btnResult.addEventListener();
    // btnAdd.addEventListener();
// }


// function setState() {
//     stateButton = 1;
//     if (stateButton === 1) {
//         btnRad.style.backgroundColor = "gray";
//         btnDeg.style.backgroundColor = "lightgray";
//     } else {
//         btnRad.style.backgroundColor = "lightgray";
//         btnDeg.style.backgroundColor = "gray";
//     }
// }

// function startUp() {
    // a = new Array(1);
    // setState();
    // eventForKey();
// }
