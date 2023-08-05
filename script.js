
function calc() {
    let d1 = document.getElementById("day").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    console.log(m2)

    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(d1 > d2) {
        d2 = d2 + months[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById("clacY").innerHTML = y;
    document.getElementById("clacM").innerHTML = m;
    document.getElementById("clacD").innerHTML = d;


    if(d1 > 31 || d1 == "" || m1 > 12 || m1 == "" || y1 > y2 || y1 == "") {
        document.getElementById("clacY").innerHTML = "--";
        document.getElementById("clacM").innerHTML = "--";
        document.getElementById("clacD").innerHTML = "--";
    }


    if(y1 == "") {
        document.querySelector(".inputs .years input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years p").style.display = "block";
        document.querySelector(".inputs .years p").innerHTML = "This field is required";
        document.getElementById("btn").style.top = "160px";
    } else if(y1 > y2) {
        document.querySelector(".inputs .years input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years p").style.display = "block";
        document.querySelector(".inputs .years p").innerHTML = "Must be in the past";
    } else {
        document.querySelector(".inputs .years p").style.display = "none";
        document.querySelector(".inputs .years input").style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector(".inputs .years span").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("btn").style.top = "140px";
    }


    if(m1 == "") {
        document.querySelector(".inputs .months input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months p").style.display = "block";
        document.querySelector(".inputs .months p").innerHTML = "This field is required";
        document.getElementById("btn").style.top = "160px";
    } else if(m1 > 12) {
        document.querySelector(".inputs .months input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months p").style.display = "block";
        document.querySelector(".inputs .months p").innerHTML = "Must be a valid day";
    } else {
        document.querySelector(".inputs .months p").style.display = "none";
        document.querySelector(".inputs .months input").style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector(".inputs .months span").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("btn").style.top = "140px";
    }


    if(d1 == "") {
        document.querySelector(".inputs .days input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days p").style.display = "block";
        document.querySelector(".inputs .days p").innerHTML = "This field is required";
        document.getElementById("btn").style.top = "160px";
    } else if(d1 > 31) {
        document.querySelector(".inputs .days input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days p").style.display = "block";
        document.querySelector(".inputs .days p").innerHTML = "Must be a valid day";
    }  else {
        document.querySelector(".inputs .days p").style.display = "none";
        document.querySelector(".inputs .days input").style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector(".inputs .days span").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("btn").style.top = "140px";
    }

    document.getElementById("btn").style.backgroundColor = "hsl(259, 100%, 65%)";
}

document.getElementById("day").value = "";
document.getElementById("month").value = "";
document.getElementById("year").value = "";

