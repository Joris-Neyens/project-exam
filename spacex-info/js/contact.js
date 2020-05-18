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
// site info

const siteInfoUrl = "https://api.spacexdata.com/v3";
async function getSiteInfo() {
    try{
        const response = await fetch(siteInfoUrl);
        const info = await response.json();
        website(info);
    }
    catch(error) {
        console.log("error");
    }
    finally {
        console.log("done");
    }
}
getSiteInfo();

function website(info) {
    const siteInfo = document.querySelector(".site-info-container");

    siteInfo.innerHTML = `<h2>About this website</h2>
                            <p>This website is build using the ${info.project_name}, an ${info.description}.
                            </p>
                            <a href ="${info.project_link}" alt="link to spacex API">${info.project_name}</a>`
                            
}