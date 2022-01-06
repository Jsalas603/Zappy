var redirectLandingPage = function() {
    window.location = "./landingindex.html";
};

function setFormMessage(formEl, type, message) {
    var messageEl = formEl.querySelector(".form-message");

    messageEl.textContent = message;
    messageEl.classList.remove("form-message-sucess", "form-message-error");
    messageEl.classList.add('form-message--${type}'); 

    if (localStorage.getItem("userName")) {
        redirectLandingPage();
    }
}

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
        var userName = document.querySelector("input[name='username']").value;

        // Set username in localstorage
        localStorage.setItem("userName", userName);

        if (localStorage.getItem("userName")) {
            setFormMessage(loginForm, "success", "You have successfully logged in!");
        } else {
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    });
});