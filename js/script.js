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

var toggle = 0;


burger.onclick = function() {

    

    if(toggle == 0) {
        burgerNav.style.display = "block"
        burgerLine.forEach(function(color) {
            color.style.color = "white"
        })
        toggle = 1;
    } else if (toggle == 1){
        burgerNav.style.display = "none"
        burgerLine.forEach(function(color) {
            color.style.color = "#1AB1E6"
        })
        toggle = 0;
    }; 

}   




