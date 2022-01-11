var redirectLandingPage = function () {
    window.location = "./landingindex.html";
};

var setLocalStorage = function(userInfo) {
    console.dir(JSON.stringify(userInfo));

    // Set userInfo in localstorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

var hashPassword = function(pass) {
    // Couldn't find a good method to hash, so obfuscating with base64 encoding for now
    // Method is not secure and should not be used in production environments
    return btoa(pass);
};

var passwordCheck = function(userPass) {
    var userInfo = localStorage.getItem("userInfo");
    // Compare user input password to password in localstorage

    if (userPass === atob(JSON.parse(userInfo).userPassword) && userInfo != null) {
        return true;
    } else {
        return false;
    }
};

function setFormMessage(formEl, type, message) {
    var messageEl = formEl.querySelector(".form-message");

    messageEl.textContent = message;
    messageEl.classList.remove("form-message-sucess", "form-message-error");
    messageEl.classList.add('form-message--${type}');


    console.log(type);

    if (type === "success") {
        redirectLandingPage();
    } else {
        return;
    }
}

function setInputError(inputEl, message) {
    inputEl.classList.add("form-input-error");
    inputEl.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
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

        if (passwordCheck(document.querySelector("input[name='password']").value)) {
            setFormMessage(loginForm, "success", "You have successfully logged in!");
        } else {
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 2) {
                setInputError(inputElement, "Username must be at least 2 characters");
            }

            // Create userObj for storing user data
            var userObj = {
                userName: document.querySelector("input[name='signupUsername']").value,
                userEmail: document.querySelector("input[name='signupEmail']").value,
                userPassword: hashPassword(document.querySelector("input[name='signupPassword']").value)
            }

            if (createAccountForm.classList.contains("form-hidden")) {
                return;
            } else {
                setLocalStorage(userObj);
            }
        });

        inputElement.addEventListener("input", e => {
            if (inputElement == null) {
                clearInputError(inputElement);
            } else {
                return;
            }
        });
    });
});
