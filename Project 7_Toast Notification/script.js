let toastContainer = document.querySelector(".toast-container");

const successMessege = `<img src="./icons/check.svg" alt="success--icon">Successfully Called`
const errorMessege = `<img src="./icons/error.svg" alt="error-icon">Sorry, Some Error Occured!`
const invalidMessege = `<img src="./icons/invalid.svg" alt="invalid-icon">Invalid option here!`

function addToast(content){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = content
    toastContainer.appendChild(toast)

    if (content.includes("error")){
        toast.classList.add("error");
    }
    else if (content.includes("Success")){
        toast.classList.add("success");
    }
    else if (content.includes("Invalid")){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove()
    },3000)
}