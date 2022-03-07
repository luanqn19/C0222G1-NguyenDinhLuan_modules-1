"use strict";

function convertCurrency() {
    let numAmount = document.getElementById('amount').value;
    let fromConvert = document.getElementById('fromCurrency').value;
    let toConvert = document.getElementById('toCurrency').value;
    if(fromConvert === "vnd"){
        if (toConvert === "vnd")
            document.getElementById('result').innerHTML = "Result: " + numAmount.toString() + " VND";
        else{
            numAmount /= 23000;
            document.getElementById('result').innerHTML = "Result: " + numAmount.toFixed(10).toString() + " USD";
        }
    }else{
        if (toConvert === "vnd"){
            numAmount *= 23000;
            document.getElementById('result').innerHTML = "Result: " + numAmount.toString() + " VND";
        }
        else{
            document.getElementById('result').innerHTML = "Result: " + numAmount.toString() + " USD";
        }
    }
}