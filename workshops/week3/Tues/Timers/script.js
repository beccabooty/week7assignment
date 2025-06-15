// setTimeout( function (){
//     console.log("Time's up!");
// }, 5000);

// setInterval ( function (){
//     console.log("Repeating message");
// }, 5000);

// const interval = setInterval( function(){
//     console.log("This happens every 2 seconds");
// },2000);

// function stopInterval(){
//     setTimeout(function(){
//         clearInterval(interval);
//     }, 6000);
// }

// stopInterval();

document.getElementById("hiddenMessage").style.visibility = "hidden";

const btn = document.querySelector("button");

btn.addEventListener("click", clickButton);

function clickButton (){button.onclick = setTimeout( function(){
    document.getElementById("hiddenMessage").style.visibility = "visible";
},5000);};

// button.onclick = setTimeout( function(){
//     document.getElementById("hiddenMessage").style.visibility = "visible";
// },5000);