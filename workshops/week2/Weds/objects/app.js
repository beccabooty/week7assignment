console.log("Hello World!");

const person ={
    myName: "Becca",
    age: 27,
    favouriteColour: "rainbow",
};

// console.log(person);
console.log(person.myName);

person.favouriteFilm="Saint Maud";
console.table(person);

const car={
    make:"Nissan",
    model:"Figaro",
    colour:"green",
}

console.log("The", car.make, car.model, "comes in a lovely shade of", car.colour);

const book={
    title:"Backlash",
    author:{
        authorName:"Susan Faludi",
        age: 66,
        otherPublications:"Stiffed"
    },
    genres: ["non-fiction","Essay","Feminism","1990's"],
};

console.log(book.author.age);
console.log(book.genres[1]);

console.log("There are {book.genres.length} genres logged for {book.title}");

for (let i = 0; i < book.genres.length; i++) {
    console.log(book.genres[i]);
}