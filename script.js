let display = document.getElementById("display")
let currentInput = "";
let prevInput = "";
let operation = null;


function appendNumber(num) {
    currentInput+=num;
    display.innerText = currentInput;
}

/* clear button Event Listener */
const clearbtn = document.getElementById("clear")
const clearbtn2 = document.getElementById("clear2")

function clearDisplay() {
    display.innerText = "0";
    prevInput = "";
    currentInput = "";
    operation = null;
}
clearbtn.addEventListener("click", ()=> clearDisplay())
clearbtn2.addEventListener("click", ()=> clearDisplay())


function operationFunc(op) {
    if(operation!==null) {
        calculate();
    }
    prevInput = currentInput;
    currentInput = "";
    operation = op;
}

function calculate() {
    let result = null;
    let prev  = parseFloat(prevInput);
    let current = parseFloat(currentInput);
    switch(operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
    }

    operation = null;
    prevInput = null;
    currentInput = result.toString();
    display.innerText = currentInput;
}

function dotFunc() {
    if(!currentInput.includes(".")) {
        currentInput += ".";
        display.innerText = currentInput;
    }
}

/**dot Event Listener */
document.getElementById("dot").addEventListener("click", () => dotFunc());


function delFunc() {
    if (currentInput !== ""){
        currentInput = currentInput.slice(0,-1);
        display.innerText = currentInput;
    }
}

/**delete button Event Listener */
document.getElementById("delete").addEventListener("click", () =>delFunc());



/* numbers Event Listeners*/
document.getElementById("zero").addEventListener("click", () => appendNumber("0"));
document.getElementById("one").addEventListener("click", () => appendNumber("1"));
document.getElementById("two").addEventListener("click", () => appendNumber("2"));
document.getElementById("three").addEventListener("click", () => appendNumber("3"));
document.getElementById("four").addEventListener("click", () => appendNumber("4"));
document.getElementById("five").addEventListener("click", () => appendNumber("5"));
document.getElementById("six").addEventListener("click", () => appendNumber("6"));
document.getElementById("seven").addEventListener("click", () => appendNumber("7"));
document.getElementById("eight").addEventListener("click", () => appendNumber("8"));
document.getElementById("nine").addEventListener("click", () => appendNumber("9"));

/* operation Event Listeners*/
document.getElementById("add").addEventListener("click", () => operationFunc("+"));
document.getElementById("subtract").addEventListener("click", () => operationFunc("-"));
document.getElementById("multiply").addEventListener("click", () => operationFunc("*"));
document.getElementById("divide").addEventListener("click", () => operationFunc("/"));

/**equals Event Listener */

document.getElementById("equals").addEventListener("click", () => calculate());