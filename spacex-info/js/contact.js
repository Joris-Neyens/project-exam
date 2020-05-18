//Hamburger Menu

const burgerButton = document.querySelector(".burger-button")
const burgerLine = document.querySelectorAll(".burger-line");
const burgerMenu = document.querySelector(".burger-menu");

let toggle = 0;

burgerButton.onclick = function() {

    if(toggle == 0) {
        burgerMenu.style.display = "block"
        burgerLine.forEach(function(color) {
            color.style.backgroundColor = "#1AB1E6"
        })
        toggle = 1;
    } else if (toggle == 1){
        burgerMenu.style.display = "none"
        burgerLine.forEach(function(color) {
            color.style.backgroundColor = "white"
        })
        toggle = 0;
    }; 
}
// site info

const siteInfoUrl = "https://api.spacexdata.com/v3";
async function getSiteInfo() {
    try{
        const response = await fetch(siteInfoUrl);
        const info = await response.json();
        website(info);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getSiteInfo();

function website(info) {
    const siteInfo = document.querySelector(".site-info-container");

    siteInfo.innerHTML = `<h2>About this website</h2>
                            <p>This website is build using the ${info.project_name}, an ${info.description}.
                            </p>
                            <a href ="${info.project_link}" alt="link to spacex API">${info.project_name}</a>`
                            
}
// form validation


const email = document.querySelector("#email");

const emailError = document.querySelector(".email-error");
const commentsError = document.querySelector(".comments-error")

email.addEventListener("click", validateAfterEmail);
comments.addEventListener("click", validateAfterComments);

//after click email
function validateAfterEmail() {
    
    const name = document.querySelector("#name");
    const nameValue = name.value; 

    if(inputLength(nameValue) === true) {
        name.placeholder = "name";
    }   else {
        name.placeholder = "Please enter your name";
    }
}

// after click comments
function validateAfterComments() {
    
    const name = document.querySelector("#name");
    const nameValue = name.value; 

    if(inputLength(nameValue) === true) {
        name.placeholder = "name";
    }   else {
        name.placeholder = "Please enter your name";
    }

    const emailValue = email.value;
    if(emailInput(emailValue) === true ) {
        emailError.style.display = "none";
    }   else {
        emailError.style.display = "block";
    }
    
    if(inputLength(emailValue) === true) {
        email.placeholder = "email";
    }   else {
        email.placeholder = "please enter email";
        emailError.style.display = "none";
    }

    

}

// after submit
const form = document.querySelector("form");
form.addEventListener("submit", submitValidate)

function submitValidate(event) {
    event.preventDefault();

    const name = document.querySelector("#name");
    const nameValue = name.value; 

    if(inputLength(nameValue) === true) {
        name.placeholder = "name";
    }   else {
        name.placeholder = "Please enter your name";
    }

    const emailValue = email.value;
    if(emailInput(emailValue) === true ) {
        emailError.style.display = "none";
    }   else {
        emailError.style.display = "block";
    }
    
    if(inputLength(emailValue) === true) {
        email.placeholder = "email";
    }   else {
        email.placeholder = "please enter email";
        emailError.style.display = "none";
    }  

    const comments = document.querySelector("#comments")
    const commentsValue = comments.value;
    if(commentsInput(commentsValue) === true ) {
        commentsError.style.display = "none";
    }   else {
        commentsError.style.display = "block";
    }   

    const sendConfirmation = document.querySelector(".send-confirmation");

    if(inputLength(nameValue) === true && emailInput(emailValue) === true  && inputLength(emailValue) === true && commentsInput(commentsValue) === true) {
        sendConfirmation.style.display = "block";
    } else {
        sendConfirmation.style.display = "none";
    }

}
    function inputLength(value) {
        if (value.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    function emailInput(email) {
        const regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
    }

    function commentsInput(comments) {
        const trimmedComments = comments.trim();

        if(trimmedComments.length >= 5) {
            return true;
        } else {
            return false;
        }

    }

    
