console.log("Hello World!");

const person ={
    name:"Becca",
    age: 27,
    heightCm: 163,
    favouriteColour: "rainbow", 
    vCool: true,
    sayHi: function(){
        console.log("Hi!");},
    greetProperly: function(name){
        console.log("Welcome " + name + "!");},
    };

    person.sayHi();
    person.greetProperly("Zim");

    const book ={
        title:"Backlash",
        pubYear: 1991,
        genre:"Non-fiction",
        author:"Susan Faludi",

        advert: function(){
        console.log(title +" is a "+ genre + " title and was published by "+ author + " in "+ pubYear);
        },
    }
    book.advert();