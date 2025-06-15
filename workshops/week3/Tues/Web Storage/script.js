// console.log("Hello World!");

// const films = {
//     filmTitle: "Saint Maud",
//     Genre: "Horror",
//     Rating: 15,
// };

// const stringifiedFilms = JSON.stringify(films);

// localStorage.setItem("films", stringifiedFilms);

// localStorage.getItem("films");
// JSON.parse(stringifiedFilms);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});

const colour = localStorage.getItem("colour");

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  const preferences = {
    colour,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));

if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}

function loadPreferences(){
    const preferences = JSON.parse(localStorage.getItem("preferences"));
    if(preferences) {
        const input = document.querySelector("input");
        input.value = preferences.colour || "#000000";
        const body = document.querySelector("body");
        body.style.color = preferences.colour||"#000000";
    }
}

const defaults = {
    colour: "#000000",
  };
  
  body.style.color = preferences.colour || defaults.colour;