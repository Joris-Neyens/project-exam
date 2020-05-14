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

const vehicles = document.querySelector(".vehicles");
vehicles.innerHTML = info.vehicles;

const summary = document.querySelector(".summary");
summary.innerHTML = info.summary;

//company-info
const companyContainer = document.querySelector(".company-container");
    companyContainer.innerHTML = `<div class="company-info">
                <div class="info">
                    <p>Founder</p>
                    <p>${info.founder}</p>
                </div>
                <div class="info">
                    <p>CEO</p>
                    <p>${info.ceo}</p>
                </div>
                <div class="info">
                    <p>Employees</p>
                    <p>${info.employees}</p>
                </div>
                <div class="info">
                    <p>Valuation</p>
                    <p>${info.valuation}</p>
                </div>
                </div>
                <div class="company-links">
                    <a href="${info.links.website}" alt="link to website Spacex">Website</a>
                    <a href="${info.links.flickr}" alt="link to flickr page of Spacex">flickr</a>
                    <a href="${info.links.twitter}" alt="link to spacex twitter">Twitter</a>
                </div>`
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
    
}    
//historic events
const historyUrl = "https://api.spacexdata.com/v3/history";
async function getHistory() {
    try{
        const response = await fetch(historyUrl);
        const events = await response.json();
        history(events);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getHistory();

function history(events) {

    const historicEvent = document.querySelector(".historic-event");
    let html = ""
    
    events.forEach (function(event) {

        let eventDate = new Date(event.event_date_utc)
        let formattedDate = eventDate.getFullYear();
        console.log(formattedDate)

        html += `   <div class="line"></div> 
                    <h2>${formattedDate}</h2>
                    <h3>${event.title}</3>
                    <p>${event.details}</p>
                    <div class="history-link-container">
                        <a href="flight.html?id=${event.flight_number}">Flight details</a>
                        <a href="${event.article}">Article</a>
                    </div>`
    });

    historicEvent.innerHTML = html;
    
};




