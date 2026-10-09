
// Calculator Inputs & Display

const result = document.querySelector("#result");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const calculate = document.querySelector("#calculate");

// Operators

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");


// Storing Operators from Users

let operator = "";

plus.addEventListener("click", 
    function (){
        operator = "+";

    }
)
minus.addEventListener("click", 
    function (){
        operator = "-";

    }
)
multiply.addEventListener("click", 
    function (){
        operator = "*";

    }
)
divide.addEventListener("click", 
    function (){
        operator = "/";

    }
)


// Creating Logic

calculate.addEventListener("click", 
    function (){
        const number1 = Number(num1.value);
        const number2  = Number(num2.value);

     if (operator === "+"){
        result.value = number1 + number2;
     }

     else if (operator === "-"){
        result.value = number1 - number2;
     }

     else if (operator === "*"){
        result.value = number1 * number2;
     }

     else if (operator === "/"){
        result.value = number1 / number2;
     }

     result.textContent = result.value;

    });