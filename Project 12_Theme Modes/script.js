const sunIcon = document.getElementById("sun-icon")
const moonIcon = document.getElementById("moon-icon")

const body = document.body

const logo = document.getElementById("logo")
const hireBtn = document.querySelector(".content-box>button");


function changeIcon(turn) {
    if (turn == "dark") {
        sunIcon.classList.remove("active-theme")
        moonIcon.classList.add("active-theme")
        

    }
    else if (turn == "light") {
        moonIcon.classList.remove("active-theme")
        sunIcon.classList.add("active-theme")
        
    }
    else {
        alert("Sorry, Some Error Occured")
    }
}

function differentForLogoAndButton(which) {
    if (which == "dark") {
        logo.style.fill = "white";
        hireBtn.style.color = "white";

    }
    else if (which == "light") {
        logo.style.fill = "var(--theme-background)";
        hireBtn.style.fill = "var(--theme-background)";

    }
}

function changeTheme() {
    body.classList.toggle("dark_theme")

    if (body.classList.contains("dark_theme")) {
        differentForLogoAndButton("dark")
        changeIcon("dark")
    }
    else {
        differentForLogoAndButton("light")
        changeIcon("light")
    }
}