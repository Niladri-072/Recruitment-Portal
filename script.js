function validateForm() {
    var username = document.forms["signupForm"]["username"].value;
    var password = document.forms["signupForm"]["password"].value;

    if (!validateUsername(username)) {
        document.getElementById("error").innerHTML = "Username should be at least 8 characters long and should only contain letters and numbers.";
        return false;
    } else {
        document.getElementById("error").innerHTML = "";
    }

    if (!validatePassword(password)) {
        document.getElementById("password_error").innerHTML = "Password should be at least 8 characters long and should contain at least one uppercase letter and one special character.";
        return false;
    } else {
        document.getElementById("password_error").innerHTML = "";
    }

    return true;
}

function validateUsername(username) {
    var regex = /^[a-zA-Z0-9]{8,}$/;
    return regex.test(username);
}

function validatePassword(password) {
    var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*
