const inputNumber = document.getElementById("number-input")
const inputName = document.getElementById("name-input")
const inputEmail = document.getElementById("email-input")
const inputMessege = document.getElementById("messege-input")

const numberError = document.getElementById("number-error")
const nameError = document.getElementById("name-error")
const emailError = document.getElementById("email-error")
const messegeError = document.getElementById("messege-error")


function checkName(){
    if(inputName.value.length==0){
        console.log("inside if")
        nameError.innerHTML="Name is required!";
        return false;
    }
    
    else if(!inputName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        console.log("inside elif")
        nameError.innerHTML="Full Name required";
        return false;
    }

    
    nameError.innerHTML=`<img src="./Equipments/tick.svg" alt="">`
    return true;
    
}

function checkNumber(){
    if(inputNumber.value.length!=10){
        numberError.innerHTML=`Please enter valid Number`
        return false;
    }
    numberError.innerHTML=`<img src="./Equipments/tick.svg" alt="">`
    return true;
}

function checkEmail(){
    if(inputEmail.value.length==0){
        emailError.innerHTML=`Email is required`
        return false;
    }
    else if(!inputEmail.value.endsWith("@gmail.com")){
        if(!inputEmail.value.endsWith("@outlook.com")){
            if(!inputEmail.value.endsWith("@yahoo.com")){
                emailError.innerHTML=`Please enter valid Email`
                return false;
            }
            emailError.innerHTML=`<img src="./Equipments/tick.svg" alt="">`
            return true;
        }
        emailError.innerHTML=`<img src="./Equipments/tick.svg" alt="">`
        return true;
    }
    emailError.innerHTML=`<img src="./Equipments/tick.svg" alt="">`
    return true;

}

function checkMessege(){
    let messegeLength = inputMessege.value.length;
    if (messegeLength<30){
        let requireMore = 30 - messegeLength;
        messegeError.innerHTML = `${requireMore} more letters required`
        return false;
    }
    messegeError.innerHTML=`<img src="./Equipments/tick.svg" alt="">`
    return true;
}

function checkAndSubmit(){
    if (!(checkName() || checkMessege() || checkEmail() || checkNumber())){
        return false;
    }
    else{
        inputNumber.value="";
        inputName.value="";
        inputEmail.value="";
        inputMessege.value="";
        numberError.innerHTML="";
        nameError.innerHTML="";
        emailError.innerHTML="";
        messegeError.innerHTML="";
        openPopup()
    }
}

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