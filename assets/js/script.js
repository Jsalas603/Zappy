function setFormMessage(formEl, type, message) {
    var messageEl = formEl.querySelector(".form-message");

    messageEl.textContent = message;
    messageEl.classList.remove("form-message-sucess", "form-message-error");
    messageEl.classList.add('form-message--${type}');
}

setFormMessage(loginForm, "success", "You're loggen in!");

document.addEventListener("DOMContentLoaded", () => {
    var loginForm = document.querySelector("#login");
    var createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
});

// Fetch from Tasty API

fetch("https://tasty.p.rapidapi.com/tags/list", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "2ce3aceaafmsh735dd48b8aa1b5fp14cc1bjsne82d5623efde"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});