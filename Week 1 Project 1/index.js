
const userDatabase = {
    "ican1234" : {
        first: "Olaitan",
        lastName: "Precious",
        email: "oojebowa@gmail.com",
        accountActivated: true,
        password: "olaitan123"
    },
    "farica" : {
        first: "Farica",
        lastName: "Oghenerume",
        email: "ooghenerume@gmail.com",
        accountActivated: false,
        password: "farica@123"
    },
    "lekan" : {
        first: "Olamilekan",
        lastName: "Oladipupo",
        email: "ooladipupo@gmail.com",
        accountActivated: true,
        password: "olamilekan#"
    },
    "ayomi" : {
        first: "Ayomi",
        lastName: "Ogechi",
        email: "oogechi@gmail.com",
        accountActivated: true,
        password: "ayomi%1"
    }
}

function displayUserDetails() {
    // Enter username
    let username = prompt("Enter your username")

while (validateUsername(username) == false){
    username = prompt("Username not valid. Please enter a valid username")
}

if (username == null) {
    return
}

// Enter password
let password = prompt("Enter your password")

while (validatePassword(password) == false)
{
    password = prompt("Password not valid. Please enter a valid password")
}

if (password == null) {
    return
}

// Confirm password
let passwordConfirm = prompt("confirm your password")

while (passwordConfirm != password){
    passwordConfirm = prompt("Password Incorrect. Confirm your password again!")
}

if (passwordConfirm == null) {
    return

}


// check if the user database contains the username
const user = userDatabase[username]

if (user == undefined){
    alert("User not found! Please register on the app.")
    return
}


alert(`
    User found with the following details:
    First Name: ${user.first}
    Last Name: ${user.lastName}
    Email: ${user.email}
    Account Activated: ${user.accountActivated}

`)




}

displayUserDetails()
alert("You have come to the end of this program! Goodbye")


function validateUsername(username) {
    if (username == null) {
        return true
    }
    if (username.length > 10) {
        return false
    } else {
        return true 
    }
}


function validatePassword(password) {
    if (password == null) {
        return true
    }

    if(password.length < 6) {
        return false
    } else {
        return true
    }
}




