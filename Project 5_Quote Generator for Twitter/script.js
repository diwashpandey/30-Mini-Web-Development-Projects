const quoet_box = document.querySelector(".quoet")

async function getData(){
    quoet_box.innerHTML=`"Loading..."`

    try{
        let response = await fetch("https://catfact.ninja/fact")
        if(response.ok){
            let data = await response.json()
            writer(data)
        }
        else{
            throw new Error("Status Is not okay")
        }
    }
    catch(error){
        quoet_box.innerHTML = "Oups, Looks like API is expired :("
        console.log(`error Occured: ${error}`)
    }
}


function writer(data){
    quoet_box.innerHTML = data.fact
}

getData()

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=dgasdgibsdgb"+quoet_box.innerHTML, "Tweet Window", "width=600, height=300")
}



