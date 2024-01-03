const display = document.getElementById("display")
var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-","*", "/", ".", "Enter","Backspace","Escape", "Delete"]

function addOnDisplay(data){
    display.value = display.value+data;

}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value=""
        display.placeholder="Error"
    }
}

function del(){
    display.value = display.value.toString().slice(0,-1)
    console.log(display.value)
}

function check(){
    if(display.value.length>9){
        return false;
    }
    else{
        return true;
    }
}  



document.body.addEventListener("keydown",(k)=>{
    display.placeholder=""
    let which = k.key.toString();
    if (values.includes(which)){
        if (which=="Enter"){
            calculate()
        }
        else if(which=="Backspace"){
            del()
        }
        else if(which=="Escape" || which=="Delete"){
            display.value = ''
        }
        else{
            addOnDisplay(which)
        }
        
        
    }
    else{
        console.log("inside else")
    }
})

document.body.addEventListener("mousedown",()=>{
    display.placeholder=""
})