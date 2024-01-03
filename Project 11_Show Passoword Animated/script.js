const passBox = document.getElementById("password")
const bar = document.querySelector(".bar")

function work(){
    bar.classList.toggle("bar-hidden")
    if(passBox.type == "text"){
        console.log("here")
        passBox.type = "password"
    }
    else if(passBox.type == "password"){
        passBox.type = "text"
    }
}