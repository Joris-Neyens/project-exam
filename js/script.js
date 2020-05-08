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

    const launchText = document.querySelector(".launch-text");
    launchText.innerHTML = `<h1>Latest Launch</h1>
                            <h2>${latestLaunch.mission_name}</h2>
                            <p>${latestLaunch.details}</p>`

    const video = document.querySelector("iframe");
    video.src = `https://www.youtube.com/embed/${latestLaunch.links.youtube_id}`

    const launchDetailsContainer = document.querySelector(".launch-details-container");
        launchDetailsContainer.innerHTML = `<div class="launch-details">
                                                <div class="details">
                                                    <p class="category">Rocket</p>
                                                    <p class="info">${latestLaunch.rocket.rocket_name}</p>
                                                </div>
                                                <div class="details">
                                                    <p class="category">Launch site</p>
                                                    <p class="info">${latestLaunch.launch_site.site_name_long}</p>
                                                </div>
                                                <div class="details">
                                                    <p class="category">Payload</p>
                                                    <p class="info">${latestLaunch.rocket.second_stage.payloads[0].payload_type}</p>
                                                </div>
                                                <div class="details">
                                                    <p class="category">Payload weight</p>
                                                    <p class="info">${latestLaunch.rocket.second_stage.payloads[0].payload_mass_kg} kg</p>
                                                </div>
                                            </div`

}



const baseUrl = "https://api.spacexdata.com/v3/launches/";
async function getLaunches() {
    try{
        const response = await fetch(baseUrl);
        const launches = await response.json();
        launchInfo(launches);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getLaunches();


function launchInfo(launches) {

}

const burger = document.querySelector(".burger")
const burgerLine = document.querySelectorAll(".burger-line");
const burgerNav = document.querySelector(".burger-nav");
const headerContent = document.querySelector(".header-content")

let toggle = 0;

burger.onclick = function() {

    if(toggle == 0) {
        burgerNav.style.display = "block"
        burgerLine.forEach(function(color) {
            color.style.backgroundColor = "white"
        headerContent.style.paddingTop = "0";
        })
        toggle = 1;
    } else if (toggle == 1){
        burgerNav.style.display = "none"
        burgerLine.forEach(function(color) {
            color.style.backgroundColor = "#1AB1E6"
        headerContent.style.paddingTop = "20vh";
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
        let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear() + " " + "UTC";
        console.log(formattedDate)

        html += `<div class="upcoming-info">
                    <p class="info">${formattedDate}</p>
                    <p class="info">${upcoming[i].mission_name}</p>
                    <p class="info">${upcoming[i].launch_site.site_name}</p>
                </div>`
    }
    launchContainer.innerHTML = html 


    const showMore = document.querySelector(".show-more-button");
    showMore.addEventListener("click", showMoreFunction);

    function showMoreFunction() {

            showMore.outerHTML = `<a class="button" href="launch-schedule.html">Full schedule</a>`
            
            const launchContainer = document.querySelector(".launch-container");
            let html = "" 

            let upcomingArray = upcoming.length;
            for(let i = 0; i < upcomingArray; i++) {
                if(i === 6) break;  

                let launchDate = new Date(upcoming[i].launch_date_utc)
                let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear() + " " + "UTC";
                console.log(formattedDate)

                html += `<div class="upcoming-info">
                            <p class="info">${formattedDate}</p>
                            <p class="info">${upcoming[i].mission_name}</p>
                            <p class="info">${upcoming[i].launch_site.site_name}</p>
                        </div>`
            }
            launchContainer.innerHTML = html
           
    } 
}

const infoUrl = "https://api.spacexdata.com/v3/info";
async function getInfo() {
    try{
        const response = await fetch(infoUrl);
        const info = await response.json();
        companyInfo(info);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getInfo();

function companyInfo(info) {
    console.log(info)
    const spacexText = document.querySelector(".spacex-text");

    spacexText.innerHTML = `<h1>SpaceX</h1>
                            <p>${info.summary}<p>
                            <a class="button" href="spacex.html">More about SpaceX</a>`
}