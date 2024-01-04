const gallery = document.querySelector(".container");


gallery.addEventListener("wheel",(e)=>{
    e.preventDefault()
    gallery.style.scrollBehaviour = "auto";
    gallery.scrollLeft+=e.deltaY;

    
})

function scrlRight(){
    gallery.scrollLeft += 200;
}

function scrlLeft(){
    gallery.scrollLeft -= 200;
}