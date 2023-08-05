# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Purple: hsl(259, 100%, 65%)
- Light red: hsl(0, 100%, 67%)

### Neutral

- White: hsl(0, 0%, 100%)
- Off white: hsl(0, 0%, 94%)
- Light grey: hsl(0, 0%, 86%)
- Smokey grey: hsl(0, 1%, 44%)
- Off black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (inputs): 32px

### Font

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400i, 700, 800i






  if(y1 > y2) {
        document.querySelector(".inputs .years input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years p").style.display = "block";
        document.querySelector(".inputs .years p").innerHTML = "Must be in the past";
    } else {
        document.querySelector(".inputs .years input").style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector(".inputs .years span").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".inputs .years p").style.display = "none";
    }
    if(d1 > 31) {
        document.querySelector(".inputs .days input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days p").style.display = "block";
        document.querySelector(".inputs .days p").innerHTML = "Must be a valid day";
    } else {
        document.querySelector(".inputs .days input").style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector(".inputs .days span").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".inputs .days p").style.display = "none";
    }
    if(m1 > 12) {
        document.querySelector(".inputs .months input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months p").style.display = "block";
        document.querySelector(".inputs .months p").innerHTML = "Must be a valid month";
    } else {
        document.querySelector(".inputs .months input").style.borderColor = "hsl(0, 0%, 86%)";
        document.querySelector(".inputs .months span").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".inputs .months p").style.display = "none";
    }


    if(y1 == "") {
        document.querySelector(".inputs .years input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .years p").style.display = "block";
        document.querySelector(".inputs .years p").innerHTML = "This field is required";
        document.getElementById("btn").style.top = "160px";
    } else {
        document.querySelector(".inputs .years p").style.display = "none";
        document.getElementById("btn").style.top = "140px";
    }
    if(m1 == "") {
        document.querySelector(".inputs .months input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .months p").style.display = "block";
        document.querySelector(".inputs .months p").innerHTML = "This field is required";
        document.getElementById("btn").style.top = "160px";
    } else {
        document.querySelector(".inputs .months p").style.display = "none";
        document.getElementById("btn").style.top = "140px";
    }
    if(d1 == "") {
        document.querySelector(".inputs .days input").style.borderColor = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days span").style.color = "hsl(0, 100%, 67%)";
        document.querySelector(".inputs .days p").style.display = "block";
        document.querySelector(".inputs .days p").innerHTML = "This field is required";
        document.getElementById("btn").style.top = "160px";
    } else {
        document.querySelector(".inputs .days p").style.display = "none";
        document.getElementById("btn").style.top = "140px";
    }