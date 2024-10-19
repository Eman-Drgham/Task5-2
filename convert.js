const number = document.querySelector(".number");
const convertFrom = document.querySelector(".convert-from");
const convertTo = document.querySelector(".convert-to");
const convertBtn = document.querySelector(".convert");
const resultSpan = document.querySelector(".result");

function convert() {
    let result = 0;
    
    if (isNaN(Number(number.value))) {
        resultSpan.innerHTML = "يرجى إدخال قيمة صحيحة.";
        return;
    }
    
    if (convertFrom.value === "m" && convertTo.value === "km") {
        result = Number(number.value) / 1000;
    } 
    else if (convertFrom.value === "m" && convertTo.value === "cm") {
        result = Number(number.value) * 100;
    }
    else if (convertFrom.value === "cm" && convertTo.value === "m") {
        result = Number(number.value) / 100;
    }
    else if (convertFrom.value === "cm" && convertTo.value === "km") {
        result = Number(number.value) / 100000;
    }
    else if (convertFrom.value === "km" && convertTo.value === "m") {
        result = Number(number.value) * 1000;
    }
    else if (convertFrom.value === "km" && convertTo.value === "cm") {
        result = Number(number.value) * 100000;
    }

    resultSpan.innerHTML = result;
}

convertBtn.addEventListener("click", convert);