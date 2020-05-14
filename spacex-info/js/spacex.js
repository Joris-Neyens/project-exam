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
//location-employees
const infoUrl = "https://api.spacexdata.com/v3/info";
async function getInfo() {
    try{
        const response = await fetch(infoUrl);
        const info = await response.json();
        spacex(info);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getInfo();

function spacex(info) {
    
const city = document.querySelector(".city");
city.innerHTML = info.headquarters.city;

const state = document.querySelector(".state");
state.innerHTML = info.headquarters.state;

const founded = document.querySelector(".founded");
founded.innerHTML = info.founded;

const employees = document.querySelector(".employees");
employees.innerHTML = info.employees;


}
//flight-amounts
const pastLaunchesUrl = "https://api.spacexdata.com/v3/launches/past";
async function getPastLaunches() {
    try{
        const response = await fetch(pastLaunchesUrl);
        const launches = await response.json();
        pastLaunches(launches);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getPastLaunches();

function pastLaunches(launches) {

    const launchesAmound = document.querySelector(".launches");
    launchesAmound.innerHTML = launches.length;


    launches.forEach(function(amount) {
        if(amount.launch_success == true) {
           console.log(amount.flight_number.length)
        }
    })
    
    
}    
