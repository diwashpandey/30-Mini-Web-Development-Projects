const minute = document.getElementById("minute")
const second = document.getElementById("second")

var min = 0;
var sec = 0;
var playing="no";
var result="no"

function displayTime(m, s) {
    minute.innerHTML = m;
    second.innerHTML = s;
}

function startTime() {
    if(playing=="no"){
        playing = "yes";
        run = setInterval(() => {
            if (sec < 60) {
                sec++;
                displayTime(min, sec)
            }
            else {
                min++
                sec = 0;
                displayTime(min, sec)
            }
        }, 1000)
    }
    else{
        pause()
    }
}



function pause() {
    clearInterval(run)
    playing="no";
}

function reset() {
    clearInterval(run)
    min = 0;
    sec = 0;
    displayTime(min, sec)
    playing="no";
}

function resetResult(){
    document.querySelector(".result").remove()
}

function showResult(){
    if (result=="no"){
        result="yes"
        const resultBox = document.createElement("div")
        resultBox.classList.add("result")
        resultBox.innerHTML = `You completed the lap in<br>${min}minute and ${sec}seconds`
        document.body.appendChild(resultBox)
        reset()
        setTimeout(()=>{
            {
                resetResult()
                result="no"

            }
        }, 5000)
    }
}