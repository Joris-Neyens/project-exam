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
            burgerButton.style.top = "-70px";
            burgerMenu.style.display = "none";
        }
    scrollPosition = currentPosition;
}
// main-menu on scroll
const mainMenu = document.querySelector(".main-menu");
    let newScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", mainScrollEvent);

    function mainScrollEvent() {
        const currentPosition = window.pageYOffset;
        if(newScrollPosition > currentPosition) {
            mainMenu.style.top = "10px";
        } else {
            mainMenu.style.top = "-70px";
        }
    newScrollPosition = currentPosition;
}
// burgerbutton pointer
burgerButton.addEventListener("mouseover", function () {
    burgerButton.style.cursor = "pointer";
});

//Countdown
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
// Latest Launch
const latestUrl = "https://api.spacexdata.com/v3/launches/latest";

async function getLatest() {
    try {
        const response = await fetch(latestUrl);
        const latestLaunch = await response.json();
        latestInfo(latestLaunch);
    }
    catch(error) {
        console.log("error")
    }
    finally {
        console.log("done")
    }
}

getLatest()

function latestInfo(latestLaunch) {

    const launchInfo = document.querySelector(".launch-info-container");
    launchInfo.innerHTML = `<h3>${latestLaunch.mission_name}</h3>
                            <div class="launch-info-flex">
                                <div class="launch-info">
                                    <div class="details">
                                        <p class="category">Rocket</p>
                                        <p class="info">${latestLaunch.rocket.rocket_name}</p>
                                    </div>
                                    <div class="details">
                                        <p class="category">Launch site</p>
                                        <p class="info">${latestLaunch.launch_site.site_name}</p>
                                    </div>
                                    <div class="details">
                                        <p class="category">Payload</p>
                                        <p class="info">${latestLaunch.rocket.second_stage.payloads[0].payload_type}</p>
                                    </div>
                                    <div class="details">
                                        <p class="category">Payload weight</p>
                                        <p class="info">${latestLaunch.rocket.second_stage.payloads[0].payload_mass_kg} kg</p>
                                    </div>
                                </div>
                                <div class="mission-patch">
                                    <img src="${latestLaunch.links.mission_patch_small}" title="mission patch" alt="mission patch ${latestLaunch.mission_name}">
                                </div>
                            </div>`

    const video = document.querySelector("iframe");
    video.src = `https://www.youtube.com/embed/${latestLaunch.links.youtube_id}`

    const moreInfoContainer = document.querySelector(".more-info-container");
    moreInfoContainer.innerHTML = `<h3>Details</h3><p>${latestLaunch.details}</p>`

}

// Upcoming Launches

const upcomingUrl = "https://api.spacexdata.com/v3/launches/upcoming";
async function getUpcoming() {
    try{
        const response = await fetch(upcomingUrl);
        const upcoming = await response.json();
        launchesUpcoming(upcoming);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getUpcoming();

function launchesUpcoming(upcoming) {

    const launchContainer = document.querySelector(".launch-container");
    let html = "" 

    let upcomingArray = upcoming.length;
    for(let i = 0; i < upcomingArray; i++) {
        if(i === 3) break;  

        let launchDate = new Date(upcoming[i].launch_date_utc)
        let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear();

        html += `<a class="flight-link" href="flight.html?id=${upcoming[i].flight_number}">
                    <div class="upcoming-info">
                        <p class="date">${formattedDate}</p>
                        <p class="name">${upcoming[i].mission_name}</p>
                        <p class="site">${upcoming[i].launch_site.site_name_long}</p>
                        <p class="arrow">></p>
                    </div>
                </a>`
    }
    launchContainer.innerHTML = html 

    const showMore = document.querySelector(".show-more-button");
    showMore.addEventListener("click", showMoreFunction);

    let toggle = 1

    function showMoreFunction() {
        if(toggle == 0) {

            showMore.innerHTML = "show more" 

            const launchContainer = document.querySelector(".launch-container");
            let html = "" 

            let upcomingArray = upcoming.length;
            for(let i = 0; i < upcomingArray; i++) {
                if(i === 3) break;  

                let launchDate = new Date(upcoming[i].launch_date_utc)
                let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear();

                html += `<a class="flight-link" href="flight.html?id=${upcoming[i].flight_number}">
                            <div class="upcoming-info">
                                <p class="date">${formattedDate}</p>
                                <p class="name">${upcoming[i].mission_name}</p>
                                <p class="site">${upcoming[i].launch_site.site_name_long}</p>
                                <p class="arrow">></p>
                            </div>
                        </a>`
            }
            launchContainer.innerHTML = html
            
            toggle = 1;
        } else if(toggle == 1) {
            toggle = 0;

                showMore.innerHTML = `^`
                showMore.classList.add(`show-less`)

                const launchContainer = document.querySelector(".launch-container");
                let html = "" 

                let upcomingArray = upcoming.length;
                for(let i = 0; i < upcomingArray; i++) {

                    let launchDate = new Date(upcoming[i].launch_date_utc)
                    let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear();

                    html += `<a class="flight-link" href="flight.html?id=${upcoming[i].flight_number}">
                                <div class="upcoming-info">
                                    <p class="date">${formattedDate}</p>
                                    <p class="name">${upcoming[i].mission_name}</p>
                                    <p class="site">${upcoming[i].launch_site.site_name_long}</p>
                                    <p class="arrow">></p>
                                </div>
                            </a>`
                }
            launchContainer.innerHTML = html
        }
    }
}

const showMore = document.querySelector(".show-more-button");  
showMore.addEventListener("mouseover", function () {    
        showMore.style.cursor = "pointer";
        showMore.style.background = "#C44489";
});
showMore.addEventListener("mouseout", function() {
    showMore.style.background = "linear-gradient(90deg, #098CF6, #1AB1E6)";
});
