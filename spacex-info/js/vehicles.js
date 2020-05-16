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
    
    //f1
    function falcon1() {

    
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


            // images
            const detailImages = document.querySelector(".detail-images");
            let html = ""

            details[0].flickr_images.forEach(function(image) {
                
                html += `<img src="${image}">`

            // reveal show more
            const revealImages = document.querySelector(".show-images");
                revealImages.style.display = "block"  
            })

        detailImages.innerHTML = html

    }
    //f9
    function falcon9() {

    
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


            // images
            const detailImages = document.querySelector(".detail-images");
            let html = ""

            details[1].flickr_images.forEach(function(image) {
                
                html += `<img src="${image}">`

            // reveal show more
            const revealImages = document.querySelector(".show-images");
                revealImages.style.display = "block"  
            })

        detailImages.innerHTML = html

    }
    //falconHeavy
    function falconHeavy() {

    
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


            // images
            const detailImages = document.querySelector(".detail-images");
            let html = ""

            details[2].flickr_images.forEach(function(image) {
                
                html += `<img src="${image}">`

            // reveal show more
            const revealImages = document.querySelector(".show-images");
                revealImages.style.display = "block"  
            })

        detailImages.innerHTML = html

    }
    //starship
    function starshipFunction() {

    
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


            // images
            const detailImages = document.querySelector(".detail-images");
            let html = ""

            details[3].flickr_images.forEach(function(image) {
                
                html += `<img src="${image}">`

            // reveal show more
            const revealImages = document.querySelector(".show-images");
                revealImages.style.display = "block"  
            })

        detailImages.innerHTML = html

    }

}

//reveal images
const detailImages = document.querySelector(".detail-images");

const showImages = document.querySelector(".show-images");
showImages.addEventListener("click", reveal);

hideImage = document.querySelector(".hide-image");
hideImage.addEventListener("click", reveal)

show = 0;

function reveal(showimages) {
    if(show == 0) {
    detailImages.style.display = "block"
    hideImage.style.display = "block"
    show = 1;
} else if (show == 1){
    detailImages.style.display = "none"
    hideImage.style.display = "none"
    show = 0;
};
}