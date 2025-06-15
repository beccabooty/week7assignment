// BEFORE
function handleSubmit(event){
    event.preventDefault();
    const username = event.target.message.value;
    console.log({username:
        username,message: message});
    }
};

form.addEventListener("submit",handleSubmit);

// AFTER

const handleSubmit = (event) => event.preventDefault();
 const username = event.target.message.value;
 console.log({username:username, message:message});

// BEFORE

button.addEventListener("click", function(){
    let count = 0;
    count += 1;
});

// AFTER

button.addEventListener("click",() => let count = 0, count += 1);