//Hamburger Menu

const burgerButton = document.querySelector(".burger-button")
const burgerLine = document.querySelectorAll(".burger-line");
const burgerMenu = document.querySelector(".burger-menu");
const countdownContainer = document.querySelector(".countdown-container")

let toggle = 0;

burgerButton.onmouseover = function() {
    burgerButton.style= "cursor: pointer;"
}

burgerButton.onclick = function() {

    if(toggle == 0) {
        burgerMenu.style.display = "block"
        toggle = 1;
    } else if (toggle == 1){
        burgerMenu.style.display = "none"
        toggle = 0;
    }; 
}
// hamburger dissapear on scroll

let scrollPosition = window.pageYOffset;
    window.addEventListener("scroll", scrollEvent);

    function scrollEvent() {
        const currentPosition = window.pageYOffset;
        if(scrollPosition > currentPosition) {
            burgerButton.style.top = "0";
        } else {
            burgerButton.style.top = "-70px";
            burgerMenu.style.display = "none";
        }
    scrollPosition = currentPosition;
}
//hamburger pointer
burgerButton.addEventListener("mouseover", function () {
    burgerButton.style.cursor = "pointer";
});

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
                            <a href ="${info.project_link}" alt="link to spacex API">Spacex API</a>`
                            
}
// form validation
const nameError = document.querySelector(".name-error")
const emailError = document.querySelector(".email-error");
const commentsError = document.querySelector(".comments-error")

email.addEventListener("click", validateAfterEmail);
comments.addEventListener("click", validateAfterComments);

//after click email
function validateAfterEmail() {
    
    const name = document.querySelector("#name");
    const nameValue = name.value; 

    if(inputLength(nameValue) === true) {
        nameError.style.display = "none";
    }   else {
        nameError.style.display = "block";
    }
}

// after click comments
function validateAfterComments() {
    
    const name = document.querySelector("#name");
    const nameValue = name.value; 

    if(inputLength(nameValue) === true) {
        nameError.style.display = "none";
    }   else {
        nameError.style.display = "block";
    }

    const emailValue = email.value;
    if(emailInput(emailValue) === true) {
        emailError.style.display = "none";
    }   else {
        emailError.style.display = "block";
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
        nameError.style.display = "none";
    }   else {
        nameError.style.display = "block";
    }

    const emailValue = email.value;
    if(emailInput(emailValue) === true && inputLength(emailValue) == true ) {
        emailError.style.display = "none";
    }   else {
        emailError.style.display = "block";
    }


    const comments = document.querySelector("#comments")
    const commentsValue = comments.value;
    if(commentsInput(commentsValue) === true ) {
        commentsError.style.display = "none";
    }   else {
        commentsError.style.display = "block";
    }   

    const sendConfirmation = document.querySelector(".send-confirmation");

    if(inputLength(nameValue) === true && emailInput(emailValue) === true  && commentsInput(commentsValue) === true) {
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

    
