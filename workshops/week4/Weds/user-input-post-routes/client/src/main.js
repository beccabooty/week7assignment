const filmForm = document.querySelector("#filmForm");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(filmForm);
  const formValues = Object.fromEntries(formData);
  fetch("http//:localhost:8080/newFilm", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}

filmForm.addEventListener("submit", handleSubmit);
