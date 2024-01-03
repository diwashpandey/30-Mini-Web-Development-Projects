const popup = document.querySelector(".popup")

function openPopup(){
    console.log("called")
    popup.classList.remove("popup-close")
    popup.classList.add("popup-open")
}

function closePopup(){
    console.log("called")
    popup.classList.add("popup-close")
    popup.classList.remove("popup-open")
}