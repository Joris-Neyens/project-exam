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
    console.log(latestLaunch)

    const launchText = document-querySelector(".launch-text");
    let html =""

    html += `<h1>Latest Launch</h1>
    <h2></h2>
    <p></p>
</div>`

    launchText.innerHTML = html;
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




