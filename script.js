console.log("script started");

// tracks number of clicks
let clicks = 0


let clickValue = 1

// stores the click display h1 element
let clickDisplay = document.getElementById("click-display");
 
// sets initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

// called each time the image is clicked
function handleClick() {
    console.log("click");
    // add one to click count
    clicks = clicks + 1;
    // update click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10) {
        alert("Congratulations, you have reached level 2. Clicks are now worth 2.");
    }
}
