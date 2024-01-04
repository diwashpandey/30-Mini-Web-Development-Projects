const previousBtn = document.getElementById("previous")
const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const progress = document.getElementById("progressbar")
const music = document.getElementById("music")
const titlePhoto = document.getElementById("title-photo")



music.onloadedmetadata = ()=>{
    // progress.max = Math.floor(music.duration);
    progress.max = music.duration;
    progress.min = music.currentTime;

}

function showError(){
    let errorbox = document.createElement("div");
    errorbox.classList.add("toast");
    errorbox.innerHTML= "Sorry, this button is not functionable";
    document.querySelector(".app").appendChild(errorbox)
    setTimeout(()=>{
        errorbox.remove();
    },2000)
}

function playPause(){
    if(playBtn.classList.contains("paused")){
        music.play()
        playBtn.classList.remove("paused");
        playBtn.classList.add("playing");
        playBtn.src ="./Equipments/icons/pause.svg";
        titlePhoto.classList.toggle("rotating")
    }

    else if (playBtn.classList.contains("playing")){
        music.pause()

        playBtn.classList.remove("playing");
        playBtn.classList.add("paused");
        
        playBtn.src ="./Equipments/icons/play.svg";
        titlePhoto.classList.toggle("rotating")
    }
}

progress.onchange=()=>{
    music.currentTime = progress.value;
    music.play();


    playBtn.src ="./Equipments/icons/pause.svg";
        if(playBtn.classList.contains("paused")){playBtn.classList.remove("paused");
        playBtn.classList.add("playing");
        playBtn.src ="./Equipments/icons/pause.svg";
        titlePhoto.classList.toggle("rotating")
        }

}

if (music.play){
    setInterval(()=>{
        progress.value = music.currentTime
    },1000)
}


