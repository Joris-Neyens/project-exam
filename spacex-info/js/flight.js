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

    flightDetails.forEach(function(details) {

        let launchSuccess = ""

        if(details.launch_success == true) {
            launchSuccess = "Successful"
        } else if (details.launch_success == false) 
            {lauchSuccess = "Failed"};

        
            let launchDate = new Date(details.launch_date_utc);
                let formattedDate = launchDate.getDate() + "-" + (launchDate.getMonth() + 1) + "-" + launchDate.getFullYear();

        if(flightNumber == details.flight_number) {
            html += `<h1>Flight ${details.mission_name}</h1>
                    <div class=""video>
                        <iframe src="https://www.youtube.com/embed/${details.links.youtube_id}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="details-container">
                        <div class="details">
                            <div>
                                <p class="category">Launch date</p>
                                <p class="data">${formattedDate}</p>
                            </div>
                            <div>
                                <p class="category">Result</p>
                                <p class="data">${launchSuccess}</p>
                            </div>
                        </div>
                        <div class="details">
                            <div>
                                <p class="category">Rocket</p>
                                <p class="data">${details.rocket.rocket_name}</p>
                            </div>
                            <div>
                                <p class="category">Type</p>
                                <p class="data">${details.rocket.rocket_type}</p>
                            </div>
                        </div>
                        <div class="details">
                            <div>
                                <p class="category">Launch Site</p>
                                <p class="data">${details.launch_site.site_name_long}</p>
                            </div>
                        </div>
                    </div>`

                const images = document.querySelector(".images")
                let imagesHtml = ""

                details.links.flickr_images.forEach(function(images) {
                    imagesHtml += `<img src="${images}">`
                });
                images.innerHTML = imagesHtml;
        }

    });
    flightInfo.innerHTML = html
}
