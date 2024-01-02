const input = document.querySelector("input")
const button = document.querySelector("button")
const result = document.querySelector(".result")

const year_box = document.getElementById("year")
const month_box = document.getElementById("month")

function writer(y, m) {
    result.style.display = "block"
    year_box.innerHTML = y;
    month_box.innerHTML = m;
}

button.addEventListener("click", () => {

    if  (input.value === ""){
        alert("Please Enter Something")
    }
    else{
        let realtime = new Date();
        let presentYear = realtime.getFullYear();
        let presentMonth = realtime.getMonth() + 1;
    
        date = input.value.split("-")
    
        let birthYear = date[0]
        let birthMonth = date[1]
    
        let yearOld = presentYear - birthYear;
    
        let MonthOld;
    
        if (presentMonth > birthMonth) {
            MonthOld = presentMonth - birthMonth;
        }
        else {
            yearOld =  yearOld-1;
            MonthOld = birthMonth - presentMonth;
        }
        
    
        writer(yearOld, MonthOld)
    }
    
})

