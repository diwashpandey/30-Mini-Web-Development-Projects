

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function work() {
    let t = new Date();

    let month = months[t.getMonth()];
    let date = t.getDate();
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();

    (hour <= 12) ? "" : (hour = hour - 12);
    (hour > 9) ? "" : (hour = `0${hour}`);
    (minute > 9) ? "" : (minute = `0${minute}`);
    (second > 9) ? "" : (second = `0${second}`);

    let month_box = document.querySelector(".month-box")
    let date_box = document.querySelector(".date-box")
    let hour_box = document.querySelector(".hour-box")
    let min_box = document.querySelector(".min-box")
    let sec_box = document.querySelector(".sec-box")

    month_box.innerHTML = `${month},`;
    date_box.innerHTML = date;
    hour_box.innerHTML = hour;
    min_box.innerHTML = minute;
    // sec_box.innerHTML = second;

    changer(sec_box, second);

}

function change(element, content) {
    element.innerHTML = content;
}

function changer(element, content) {
    element.style.fontSize = "0px";
    change(element, content);
    element.style.fontSize = "1em";
    console.log("done")
}





setInterval(work, 1000);



