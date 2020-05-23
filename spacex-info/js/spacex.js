//Hamburger Menu

const burgerButton = document.querySelector(".burger-button")
const burgerLine = document.querySelectorAll(".burger-line");
const burgerMenu = document.querySelector(".burger-menu");
const h1 = document.querySelector("h1")
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
            burgerButton.style.top = "-100px";
            burgerMenu.style.display = "none";
        }
    scrollPosition = currentPosition;
}
// main-menu on scroll
const navigationBar = document.querySelector(".navigation-bar");
const mainMenu = document.querySelector(".main-menu");

    let newScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", mainScrollEvent);

    function mainScrollEvent() {
        const currentPosition = window.pageYOffset;
        if(newScrollPosition > currentPosition) {
            navigationBar.style.top = "0px";
            mainMenu.style.top = "10px";
        } else {
            navigationBar.style.top = "-100px";
            mainMenu.style.top = "-100px";
        }
    newScrollPosition = currentPosition;
}
//hamburger pointer
burgerButton.addEventListener("mouseover", function () {
    burgerButton.style.cursor = "pointer";
});

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
        let flightNumber = ""
        if (event.flight_number) {
            flightNumber = `<a href="flight.html?id=${event.flight_number}">Flight Details</a>`
        }

        let eventDate = new Date(event.event_date_utc)
        let formattedDate = eventDate.getFullYear();

        html += `  <div class="event-container"> 
                        <div class="year">
                            <h2>${formattedDate}</h2>
                        </div>
                        <h3>${event.title}</h3>
                        <div class="timeline-flex">
                            <div class="timeline-details">
                                <p>${event.details}</p>
                            </div>
                            <div class="history-link-container">
                                ${flightNumber}
                                <a href="${event.links.article}">Article</a>
                            </div>
                        </div>
                    </div>`

        
                  
                    
    })
    
historicEvent.innerHTML = html;

}
