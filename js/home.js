const burgerButton = document.querySelector(".burger-button")
const burgerLine = document.querySelectorAll(".burger-line");
const burgerMenu = document.querySelector(".burger-menu");
const h1 = document.querySelector("h1")
const countdownContainer = document.querySelector(".countdown-container")

let toggle = 0;

burgerButton.onclick = function() {

    if(toggle == 0) {
        burgerMenu.style.display = "block"
        burgerLine.forEach(function(color) {
            color.style.backgroundColor = "white"
        countdownContainer.style.paddingTop = "20px"
        h1.style.paddingTop = "0px"
        })
        toggle = 1;
    } else if (toggle == 1){
        burgerMenu.style.display = "none"
        burgerLine.forEach(function(color) {
            color.style.backgroundColor = "#1AB1E6"
            countdownContainer.style.paddingTop = "50px"
            h1.style.paddingTop = "100px"
        })
        toggle = 0;
    }; 
}

const nextUrl = "https://api.spacexdata.com/v3/launches/next";
async function getNext() {
    try{
        const response = await fetch(nextUrl);
        const next = await response.json();
        nextLaunch(next);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getNext();

function nextLaunch(next) {

    const missionName = document.querySelector(".mission-name");
    missionName.innerHTML = next.mission_name

    const missionDate = document.querySelector(".mission-date");
    let launchDate = new Date(next.launch_date_utc);
        let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear();
    
    missionDate.innerHTML = formattedDate
    
    let givenDate = next.launch_date_local;
    var newDate = Date.parse(givenDate);
    
    let interval = setInterval(function() {
        let now = new Date().getTime();

    let difference = newDate - now;

    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    const clockSeconds = document.querySelector(".seconds");
    const clockMinutes = document.querySelector(".minutes");
    const clockHours = document.querySelector(".hours");
    const clockDays = document.querySelector(".days");

    clockSeconds.innerHTML = seconds;
    clockMinutes.innerHTML = minutes;
    clockHours.innerHTML = hours;
    clockDays.innerHTML = days;
    
    })
}

