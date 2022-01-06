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
>>>>>>> 692d4bd7a32115b99ab1c2dd95d39932f9acb96e
