console.log("Hello World!");

const image = document.getElementById("img");

image.addEventListener("load", function (event){
    console.log("Loaded!", event);
});