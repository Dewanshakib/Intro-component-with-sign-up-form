const submitBtn = document.querySelector(".submit-btn"); // submit btn
const fName = document.querySelector(".f-name"); // Full name input field
const lName = document.querySelector(".l-name"); // last name input field
const email = document.querySelector(".email"); // Email input field
const password = document.querySelector(".pass"); // Password input field
const errorImg_1 = document.querySelector(".e-img-1"); // Error icon image first
const errorImg_2 = document.querySelector(".e-img-2"); // Error icon image second
const errorImg_3 = document.querySelector(".e-img-3"); // Error icon image third
const errorImg_4 = document.querySelector(".e-img-4"); // Error icon image fourth
const errorMsg_1 = document.querySelector(".e-msg-1"); //  Error message first
const errorMsg_2 = document.querySelector(".e-msg-2"); //  Error message second
const errorMsg_3 = document.querySelector(".e-msg-3"); //  Error message third
const errorMsg_4 = document.querySelector(".e-msg-4"); //  Error message fourth

submitBtn.addEventListener("click", () => {
    fullNameValidation()
    lastNameValidation()
    emailValidation()
    passwordValidation()
});

const fullNameValidation = () => {
    if (fName.value === "") {
        errorImg_1.style.display = "block"
        errorMsg_1.innerHTML = "First Name cannot be empty"
        fName.style.border = "1px solid red"
    }
    else {
        errorImg_1.style.display = "none"
        errorMsg_1.innerHTML = ""
        fName.style.border = "1px solid grey"
    }
}

const lastNameValidation = () => {
    if (lName.value === "") {
        errorImg_2.style.display = "block"
        errorMsg_2.innerHTML = "Last Name cannot be empty"
        lName.style.border = "1px solid red"
    }
    else {
        errorImg_2.style.display = "none"
        errorMsg_2.innerHTML = ""
        lName.style.border = "1px solid grey"
    }
}

const emailValidation = () => {
    let emailPattern = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

    if (email.value.match(emailPattern)) {
        errorImg_3.style.display = "none"
        errorMsg_3.innerHTML = ""
        email.style.border = "1px solid grey"
    }
    else {
        errorImg_3.style.display = "block"
        errorMsg_3.innerHTML = "Looks like this is not an email"
        email.style.border = "1px solid red"
        email.style.color = "red"
    }
}

const passwordValidation = () => {
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

    if (password.value.match(passwordPattern)) {
        errorImg_4.style.display = "none"
        errorMsg_4.innerHTML = ""
        password.style.border = "1px solid grey"
    }
    else {
        errorImg_4.style.display = "block"
        errorMsg_4.innerHTML = "Password cannot be empty"
        password.style.border = "1px solid red"
    }
}
