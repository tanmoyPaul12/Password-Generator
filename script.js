const passwordBox = document.getElementById("Password")

const button = document.getElementById("btn");

const copyButton = document.getElementById("copy")

const passLength = 10;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const specialChar = "!@#$%^&*()_+-=|\<>?/";

const number = "0123456789";


const allChar = uppercase + lowercase + specialChar + number;



function createPassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += specialChar[Math.floor(Math.random()*specialChar.length)];


    while(passLength > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordBox.value = password;
}




function copyPass() {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("copied ✅");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}




button.addEventListener("click", createPassword);

copyButton.addEventListener("click", copyPass);
