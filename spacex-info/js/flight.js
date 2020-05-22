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

// flight page
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if(params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "flight.html";
};

var flightNumber = `${id}`;

const launchesUrl = "https://api.spacexdata.com/v3/launches";
async function getLaunches() {
    try{
        const response = await fetch(launchesUrl);
        const flightDetails = await response.json();
        launches(flightDetails);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getLaunches();

function launches(flightDetails) {
    
    const flightInfo = document.querySelector(".flight-info")
    html = ""

    flightDetails.forEach(function(flight_details) {

        let launchSuccess = "TBD"

        if(flight_details.launch_success == true) {
            launchSuccess = "Successful"
        } else if (flight_details.launch_success == false) {
            lauchSuccess = "Failed"
        }
        

        let video = ""
        if(flight_details.links.youtube_id) {
            video = `<iframe src="https://www.youtube.com/embed/${flight_details.links.youtube_id}" frameborder="0" allowfullscreen></iframe>`
        } else if(flight_details.links.youtube_id == null) {
            video = ""
        }

        let flightDescription = ""
        if(flight_details.details) {
            flightDescription = `<h3>Details</h3>
            <p>${flight_details.details}</p>`
        } else {
            flightDescription = ""
        }
        
            let launchDate = new Date(flight_details.launch_date_utc);
                let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear();

        if(flightNumber == flight_details.flight_number) {
            html += `<div class="flight-data">
                        <h1>Flight ${flight_details.flight_number}</h1>
                        <div class="details-container">
                            <div class="column">
                                <div class="details">
                                    <p class="category">Mission name</p>
                                    <p class="data">${flight_details.mission_name}</p>
                                </div>
                                <div class="details">
                                    <p class="category">Launch date</p>
                                    <p class="data">${formattedDate}</p>
                                </div>
                            </div>
                            <div class="column">
                                <div class="details">
                                    <p class="category">Result</p>
                                    <p class="data">${launchSuccess}</p>
                                </div>
                                <div class="details">
                                    <p class="category">Rocket</p>
                                    <p class="data">${flight_details.rocket.rocket_name}</p>
                                </div>
                            </div>
                        </div>
                        <div class="location">
                            <p class="launch-site">Launch Site</p>
                            <p class="launch-site-name">${flight_details.launch_site.site_name_long}</p>
                        </div>
                    </div>
                    <div class="video">
                        ${video}
                    </div>
                    <div class="description">
                        ${flightDescription}
                    </div>`

                const images = document.querySelector(".images")
                let imagesHtml = ""

                flight_details.links.flickr_images.forEach(function(images) {
                    imagesHtml += `<img src="${images}">`
                });
                images.innerHTML = imagesHtml;
        }

    });
    flightInfo.innerHTML = html
}
