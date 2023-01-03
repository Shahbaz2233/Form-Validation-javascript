let form = document.getElementById("form");
let username = document.getElementById("name");
let phone = document.getElementById("phone")
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
});
//more email validate
let isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.lenght - 1) return false;
    return true;

}

let sendData = (usernameVal, data, count) => {
    if (data === count) {
        alert("success")
       location.href = "./secondpage.html"
    }
}

const successMessage = (usernameVal) => {
    let formCont = document.getElementsByClassName("form-control");
    console.log(formCont)
    let count = formCont.length - 1;
    for (var i = 0; i < formCont.length; i++) {
        if (formCont[i].className === "form-control success") {
            var data = 0 + i;
            sendData(usernameVal, data, count);
        } else {
            return false;
        }
    }
}

const validate = () => {
    let usernameVal = username.value.trim();
    let phoneVal = username.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let confirmPasswordVal = confirmPassword.value.trim();

    //username valitade

    if (usernameVal === "") {
        setErrorMsg(username, "username cannot be blank")
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, "username must be three or more")
    } else {
        setSuccess(username);
    }

    //  validate email
    if (emailVal === "") {
        setErrorMsg(email, "email cannot be blank")
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, "Not a valid Email")
    } else {
        setSuccess(email);
    }

    //phone validation
    if (phoneVal === "") {
        setErrorMsg(phone, "phone cannot be blank")
    } else if (phoneVal.length = !11) {
        setErrorMsg(phone, "phone require 10")
    } else {
        setSuccess(phone)
    }

    //password validation
    if (passwordVal === "") {
        setErrorMsg(password, "password cannot be blank")
    } else if (passwordVal.length <= 4) {
        setErrorMsg(password, "password require atleast 4 charater")
    } else {
        setSuccess(password)
    }
    //confirm password validation
    if (passwordVal = !confirmPasswordVal) {
        setErrorMsg(confirmPassword, "password does not match")
    } else {
        setSuccess(confirmPassword)
    }

    successMessage(usernameVal);

}

function setErrorMsg(input, errormessage) {
    input.className = "border-error";
    let formControl = input.parentElement;
    let small = formControl.querySelector("small");
    formControl.className = "form-control error"
    small.innerText = errormessage;
}

function setSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success"

}