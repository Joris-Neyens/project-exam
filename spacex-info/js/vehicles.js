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
//hamburger pointer
burgerButton.addEventListener("mouseover", function () {
    burgerButton.style.cursor = "pointer";
});

//rockets

const rocketsUrl = "https://api.spacexdata.com/v3/rockets";
async function getRockets() {
    try{
        const response = await fetch(rocketsUrl);
        const details = await response.json();
        rockets(details);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getRockets();

function rockets(details) {
    
    //rocket details
    const rocketInfo = document.querySelector(".rocket-info");

    const f1 = document.querySelector(".f1");
    f1.addEventListener("click", falcon1)
    const f9 = document.querySelector(".f9");
    f9.addEventListener("click", falcon9)
    const fheavy = document.querySelector(".fheavy");
    fheavy.addEventListener("click", falconHeavy)
    const starship = document.querySelector(".starship");
    starship.addEventListener("click", starshipFunction)

    const revealImages = document.querySelector(".show-images");
    const rocketIntroduction = document.querySelector(".rocket-introduction");
    
    //f1
    let switchf1 = 0;

    function falcon1() {

        if(switchf1 == 0) {
            switchf1 = 1
            rocketInfo.style.display = "block";
    
            rocketInfo.innerHTML = `<h2>${details[0].rocket_name}</h2>
                                    <p>${details[0].description}</p>
                                    <div class="rocket-details">
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">first flight</p>
                                                <p class="info">${details[0].first_flight}</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">success rate</p>
                                                <p class="info">${details[0].success_rate_pct}%</p>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">mass</p>
                                                <p class="info">${details[0].mass.kg} kg</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Diameter</p>
                                                <p class="info">${details[0].diameter.meters} m</p>
                                            </div>
                                        </div>
                                    </div>`

                // reveal show more
                revealImages.style.display = "block";
                rocketIntroduction.style.display = "none";

                // images
                const detailImages = document.querySelector(".detail-images");
                detailImages.style.display = "none";
                let html = ""

                const hideImage = document.querySelector(".hide-image");
                hideImage.style.display = "none";

                details[0].flickr_images.forEach(function(image) {
                    
                    html += `<img src="${image}">`
                })

            detailImages.innerHTML = html
        } else if (switchf1 == 1) {
            switchf1 = 0;
            rocketInfo.style.display = "none";
            revealImages.style.display = "none";
            detailImages.style.display = "none";
            rocketArrow.style.transform = "rotate(0deg)";
            hideImage.style.display = "none";
            rocketIntroduction.style.display = "block";
        }
    }
    //f9
    let switchf9 = 0;

    function falcon9() {

        if(switchf9 == 0) {
        switchf9 = 1;
            rocketInfo.style.display = "block";
    
            rocketInfo.innerHTML = `<h2>${details[1].rocket_name}</h2>
                                    <p>${details[1].description}</p>
                                    <div class="rocket-details">
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">first flight</p>
                                                <p class="info">${details[1].first_flight}</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">success rate</p>
                                                <p class="info">${details[1].success_rate_pct}%</p>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">mass</p>
                                                <p class="info">${details[1].mass.kg} kg</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Diameter</p>
                                                <p class="info">${details[1].diameter.meters} m</p>
                                            </div>
                                        </div>
                                    </div>`
                
                // reveal show more
                revealImages.style.display = "block" 
                rocketIntroduction.style.display = "none";

                // images
                const detailImages = document.querySelector(".detail-images");
                detailImages.style.display = "none";
                let html = ""

                const hideImage = document.querySelector(".hide-image");
                hideImage.style.display = "none";

                details[1].flickr_images.forEach(function(image) {
                    
                    html += `<img src="${image}">`
    
                })

            detailImages.innerHTML = html
        }   else if(switchf9 == 1) {
            switchf9 = 0
            rocketInfo.style.display = "none";
            revealImages.style.display = "none";
            detailImages.style.display = "none";
            rocketArrow.style.transform = "rotate(0deg)";
            hideImage.style.display = "none";
            rocketIntroduction.style.display = "block";
        }

    }
    //falconHeavy
    let switchfheavy = 0;

    function falconHeavy() {

        if(switchfheavy == 0) {
            switchfheavy = 1;
                rocketInfo.style.display = "block";

            rocketInfo.innerHTML = `<h2>${details[2].rocket_name}</h2>
                                    <p>${details[2].description}</p>
                                    <div class="rocket-details">
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">first flight</p>
                                                <p class="info">${details[2].first_flight}</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">success rate</p>
                                                <p class="info">${details[2].success_rate_pct}%</p>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">mass</p>
                                                <p class="info">${details[2].mass.kg} kg</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Diameter</p>
                                                <p class="info">${details[2].diameter.meters} m</p>
                                            </div>
                                        </div>
                                    </div>`

                // reveal show more
                revealImages.style.display = "block" 
                rocketIntroduction.style.display = "none";

                // images
                const detailImages = document.querySelector(".detail-images");
                detailImages.style.display = "none";
                let html = ""

                const hideImage = document.querySelector(".hide-image");
                hideImage.style.display = "none";

                details[2].flickr_images.forEach(function(image) {
                    
                    html += `<img src="${image}">`

                })

            detailImages.innerHTML = html

        }   else if(switchfheavy == 1) {
            switchfheavy = 0
            rocketInfo.style.display = "none";
            revealImages.style.display = "none";
            detailImages.style.display = "none";
            rocketArrow.style.transform = "rotate(0deg)";
            hideImage.style.display = "none";
            rocketIntroduction.style.display = "block";
        }

    }
    //starship
    switchStarship = 0;

    function starshipFunction() {

        if(switchStarship == 0) {
            switchStarship = 1;
                rocketInfo.style.display = "block";
    
            rocketInfo.innerHTML = `<h2>${details[3].rocket_name}</h2>
                                    <p>${details[3].description}</p>
                                    <div class="rocket-details">
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">first flight</p>
                                                <p class="info">${details[3].first_flight}</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">success rate</p>
                                                <p class="info">${details[3].success_rate_pct}%</p>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">mass</p>
                                                <p class="info">${details[3].mass.kg} kg</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Diameter</p>
                                                <p class="info">${details[3].diameter.meters} m</p>
                                            </div>
                                        </div>
                                    </div>`

                // reveal show more
                revealImages.style.display = "block";
                rocketIntroduction.style.display = "none";  

                // images
                const detailImages = document.querySelector(".detail-images");
                detailImages.style.display = "none";
                let html = ""

                const hideImage = document.querySelector(".hide-image");
                hideImage.style.display = "none";

                details[3].flickr_images.forEach(function(image) {
                    
                    html += `<img src="${image}">`

                })

            detailImages.innerHTML = html

        }   else if(switchStarship == 1) {
            switchStarship = 0
            rocketInfo.style.display = "none";
            revealImages.style.display = "none";
            detailImages.style.display = "none";
            rocketArrow.style.transform = "rotate(0deg)";
            hideImage.style.display = "none";
            rocketIntroduction.style.display = "block";
        }
    }

}
//reveal images
const detailImages = document.querySelector(".detail-images");
const rocketArrow = document.querySelector(".rocket-arrow");

const showImages = document.querySelector(".show-images");
showImages.addEventListener("click", reveal);

const hideImage = document.querySelector(".hide-image");
hideImage.addEventListener("click", reveal)

const rocketInfo = document.querySelector(".rocket-info");

show = 1;

function reveal() {
    if(show == 0) {
        detailImages.style.display = "block"
        hideImage.style.display = "block"
        rocketArrow.style.transform = "rotate(180deg)";
        rocketInfo.style.display = "none";
        showImages.style.display = "none";
        
        show = 1;
    } else if (show == 1){
        detailImages.style.display = "none"
        hideImage.style.display = "none"
        rocketArrow.style.transform = "rotate(0deg)";
        rocketInfo.style.display = "block";
        showImages.style.display = "block";
        show = 0;
    };
}

//dragons
const dragonsUrl = "https://api.spacexdata.com/v3/dragons";
async function getDragons() {
    try{
        const response = await fetch(dragonsUrl);
        const details = await response.json();
        dragons(details);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getDragons();

function dragons(details) {

    const dragonInfo = document.querySelector(".dragon-info");

    const dragon1 = document.querySelector(".dragon1");
    dragon1.addEventListener("click", dragon1function)
    const dragon2 = document.querySelector(".dragon2");
    dragon2.addEventListener("click", dragon2function);

    const revealDragonImages = document.querySelector(".show-dragon-images");
    const dragonIntroduction = document.querySelector(".dragon-introduction");

    let switchDragon1 = 0;
    
    //dragon1
    function dragon1function() {
    
        if(switchDragon1 == 0) {
            switchDragon1 = 1;
                dragonInfo.style.display = "block";

            dragonInfo.innerHTML = `<h2>${details[0].name}</h2>
                                    <p>${details[0].description}</p>
                                    <div class="rocket-details">
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">first flight</p>
                                                <p class="info">${details[0].first_flight}</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Crew Capacity</p>
                                                <p class="info">${details[0].crew_capacity}</p>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">weight</p>
                                                <p class="info">${details[0].dry_mass_kg} kg</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Diameter</p>
                                                <p class="info">${details[0].diameter.meters} m</p>
                                            </div>
                                        </div>
                                    </div>`
                
                // reveal show more
                revealDragonImages.style.display = "block"  
                dragonIntroduction.style.display = "none";

                // images
                const detailDragonImages = document.querySelector(".detail-dragon-images");
                detailDragonImages.style.display = "none";
                let dragonHtml = ""

                const hideDragonImages = document.querySelector(".hide-dragon-images");
                hideDragonImages.style.display = "none";

                details[0].flickr_images.forEach(function(image) {
                    
                    dragonHtml += `<img src="${image}">`

                })

            detailDragonImages.innerHTML = dragonHtml
        
        }   else if(switchDragon1 == 1) {
            switchDragon1 = 0
            dragonInfo.style.display = "none";
            revealDragonImages.style.display = "none"  
            detailDragonImages.style.display = "none"
            dragonArrow.style.transform = "rotate(0deg)"
            hideDragonImages.style.display = "none";
            dragonIntroduction.style.display = "block";
        }

    }
    //dragon2
    let switchDragon2 = 0;

    function dragon2function() {

        if(switchDragon2 == 0) {
            switchDragon2 = 1;
                dragonInfo.style.display = "block";
    
            dragonInfo.innerHTML = `<h2>${details[1].name}</h2>
                                    <p>${details[1].description}</p>
                                    <div class="rocket-details">
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">first flight</p>
                                                <p class="info">${details[1].first_flight}</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Crew Capacity</p>
                                                <p class="info">${details[1].crew_capacity}</p>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="details">
                                                <p class="category">weight</p>
                                                <p class="info">${details[1].dry_mass_kg} kg</p>
                                            </div>
                                            <div class="details">
                                                <p class="category">Diameter</p>
                                                <p class="info">${details[1].diameter.meters} m</p>
                                            </div>
                                        </div>
                                    </div>`
                
                // reveal show more
                revealDragonImages.style.display = "block" 
                dragonIntroduction.style.display = "none"; 

                // images

                const detailDragonImages = document.querySelector(".detail-dragon-images");
                detailDragonImages.style.display = "none";
                let dragonHtml = ""

                const hideDragonImages = document.querySelector(".hide-dragon-images");
                hideDragonImages.style.display = "none";

                details[1].flickr_images.forEach(function(image) {
                    
                    dragonHtml += `<img src="${image}">`

                })

            detailDragonImages.innerHTML = dragonHtml;

        }   else if(switchDragon2 == 1) {
            switchDragon2 = 0
            dragonInfo.style.display = "none";
            revealDragonImages.style.display = "none";
            detailDragonImages.style.display = "none";
            dragonArrow.style.transform = "rotate(0deg)";
            hideDragonImages.style.display = "none";
            dragonIntroduction.style.display = "block";
        }
    }

}
//reveal images
const detailDragonImages = document.querySelector(".detail-dragon-images");
const dragonArrow = document.querySelector(".dragon-arrow");

const showDragonImages = document.querySelector(".show-dragon-images");
showDragonImages.addEventListener("click", revealDragon);

const hideDragonImages = document.querySelector(".hide-dragon-images");
hideDragonImages.addEventListener("click", revealDragon);

const dragonInfo = document.querySelector(".dragon-info");

showDragon = 0;

function revealDragon() {
    if(showDragon == 0) {
        detailDragonImages.style.display = "block";
        hideDragonImages.style.display = "block";
        dragonArrow.style.transform = "rotate(180deg)";
        showDragonImages.style.display = "none";
        dragonInfo.style.display = "none";
        showDragon = 1;
    } else if (showDragon == 1){
        detailDragonImages.style.display = "none";
        hideDragonImages.style.display = "none";
        dragonArrow.style.transform = "rotate(0deg)";
        dragonInfo.style.display = "block";
        showDragonImages.style.display = "block";
        showDragon = 0;
    };
}

// links style
let vehicleLink = document.querySelectorAll(".link");

vehicleLink.forEach(function(link) {
    link.onmouseover = (function() {
        link.style= "background: #C44489;"
    })
});

vehicleLink.forEach(function(link) {
    link.onmouseout = (function() {
        link.style= "linear-gradient(90deg, #098CF6, #1AB1E6);"
    })
});




