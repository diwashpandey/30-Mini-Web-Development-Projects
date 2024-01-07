const display = document.getElementById("display");
const question = document.getElementById("question");

const higherBtn = document.querySelector(".display");
const lowerBtn = document.querySelector(".lower");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const mainBtn = document.querySelector(".main-btn");
const allBtn = document.querySelectorAll("button")

const group1Btn = document.getElementsByClassName("group1")
const group2Btn = document.getElementsByClassName("group2")

const backgroundMusic = new Audio("./Equipments/BackgroundMusic.mp3");
const pop = new Audio("./Equipments/pop.mp3");
const win = new Audio("./Equipments/win.mp3");

var max, mid, min;

backgroundMusic.loop = true;

class Game {
    ask() {
        question.innerText = "Higher or Lower";
    }

    confirm() {
        question.innerText = "Is your number?";
    }

    start() {
        pop.play()
        max = 100;
        min = 0;
        mid = max / 2;

        mainBtn.style.display = "none";
        question.style.display = "block";
        display.value = 50;
        display.style.display = "block";


        this.ask();
        display.value = mid;
        this.disableBtns(1);
    }

    isHigher() {
        pop.play()
        let tempMin = min;
        min = mid;
        mid = Math.floor(min + ((max - min) / 2));
        display.value = mid;
        this.confirm();
        this.disableBtns(2);
    }

    isLower() {
        pop.play()
        max = mid;
        mid = min + Math.floor(((max - min) / 2));
        display.value = mid;
        this.confirm();
        this.disableBtns(2);
    }

    yes() {
        win.play();
        setTimeout(() => {
            backgroundMusic.volume = 0.2;
        }, 400)
        setTimeout(() => {
            backgroundMusic.volume = 1;
        }, 4000)
        for (let i = 0; i < 5; i++) {
            allBtn[i].style.display = "none";
        }
        display.style.display = "none";
        question.innerHTML = `Yeahh, Your number is<br><span>${mid}</span>`;
        mainBtn.innerText = "restart";
        mainBtn.style.display = "block";
        mainBtn.style.marginTop = "100px";
    }

    no() {
        pop.play()
        this.ask();
        this.disableBtns(1);
    }

    disableBtns(group) {
        if (group == 1) {
            for (let i = 0; i < 2; i++) {
                group1Btn[i].style.display = "none";
            }
            for (let i = 0; i < 2; i++) {
                group2Btn[i].style.display = "block";
            }
        }
        else if (group = 2) {
            for (let i = 0; i < 2; i++) {
                group2Btn[i].style.display = "none";
            }
            for (let i = 0; i < 2; i++) {
                group1Btn[i].style.display = "block";
            }
        }
        else {
            alert('something went wrong')
        }
    }
}


document.body.addEventListener("click", () => {
    backgroundMusic.play();
});

const game = new Game();