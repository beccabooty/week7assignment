console.log("Hello World!");

function notifyGuest (){
    console.log("Welcome to the site, esteemed guest!");
}

function myFunction(notifyGuest) {
    console.log("Running myFunction...be with you soon!");
    console.log("Task complete");
    notifyGuest();
}

myFunction(notifyGuest);

function add(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

function subtract(a,b){
    return a - b;
}

function myCalc (a, b, operationCallback){
    console.log("Running the numbers", a, b);
    console.log("Here you go!");
    return operationCallback(a, b);
}

// const result = myCalc(1,2,add);
// console.log(result);

// const result = myCalc(5,5,multiply);
// console.log(result);

const result = myCalc(100,75,subtract);
console.log(result);