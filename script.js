const display = document.getElementById("display");
let arr = [];

const seven = document.getElementById("seven");

seven.addEventListener("click", e=>{
    
    arr.push("7");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});


const eight = document.getElementById("eight");

eight.addEventListener("click", e=>{
    
    arr.push("8");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const nine = document.getElementById("nine");

nine.addEventListener("click", e=>{
    
    arr.push("9");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const four = document.getElementById("four");

four.addEventListener("click", e=>{
    
    arr.push("4");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const five = document.getElementById("five");

five.addEventListener("click", e=>{
    
    arr.push("5");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const six = document.getElementById("six");

six.addEventListener("click", e=>{
    
    arr.push("6");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const one = document.getElementById("one");

one.addEventListener("click", e=>{
    
    arr.push("1");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const two = document.getElementById("two");

two.addEventListener("click", e=>{
    
    arr.push("2");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const three = document.getElementById("three");

three.addEventListener("click", e=>{
    
    arr.push("3");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const multiply = document.getElementById("multiply");

multiply.addEventListener("click", e=>{
    
    arr.push("*");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const minus = document.getElementById("minus");

minus.addEventListener("click", e=>{
    
    arr.push("-");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const plus = document.getElementById("plus");

plus.addEventListener("click", e=>{
    
    arr.push("+");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const divide = document.getElementById("divide");

divide.addEventListener("click", e=>{
    
    arr.push("/");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const clear = document.getElementById("clear");

clear.addEventListener("click", e=>{
    
    arr = [];

    
    display.innerText = "0";
    
});

const comma = document.getElementById("comma");

comma.addEventListener("click", e=>{
    
    arr.push(".");

    if (arr.length > 0) {
        display.innerText = arr.join("");
    }
});

const equals = document.getElementById("equals");

equals.addEventListener("click", e=>{
    let tempAnswer = eval(arr.join(""));

    
    

    
        display.innerText = tempAnswer.toString();
  
});

