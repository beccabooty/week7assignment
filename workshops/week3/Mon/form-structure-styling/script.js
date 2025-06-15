const aboutYouForm = document.getElementById("aboutYou-form");
console.dir(aboutYouForm);

function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(aboutYouForm);
    console.log(formData);
    const formValues = Object.fromEntries(formData);
    console.table(formValues);
}

aboutYouForm.addEventListener("submit",handleSubmit);