const add_btn = document.querySelector("button");
const input_box = document.querySelector(".input_box>input");
const list_box = document.querySelector(".list_box");

function addList(text){
    let lists = document.querySelectorAll(".list_box>li");
    let listNo = lists.length;
    console.log(listNo)

    newList = `<li>
    <label class="list${listNo}">
    <input type="checkbox">
    <span class="checkmark">✓</span>
    <pre>${text}</pre>
    </label>
    <img src="./icons/cross.svg" class="cross cross_for_">
    </li>`;

    list_box.innerHTML = newList + list_box.innerHTML
}



add_btn.addEventListener('click',()=>{
    if (input_box.value == ""){
        input_box.classList.add("red_placeholder")
        input_box.placeholder = "Please Enter Something";
    }
    else{
        input_box.classList.remove("red_placeholder")
        input_box.placeholder = "Add your to-do";
        addList(input_box.value)
    }
})

list_box.addEventListener('click',(element)=>{
    
    if (element.target.tagName == "IMG"){

        console.log("Clicked on cross")
        element.target.parentElement.remove()
    }
    
})
