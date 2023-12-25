let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
    console.log("code = ", event.code);
    console.log("key = ", event.key);
    if (event.code == "ArrowUp" || event.key == "U" || event.key == "u") {
        console.log("character moves up");
    }
    else if (event.code == "ArrowDown" || event.key == "D" || event.key == "d") {
        console.log("character moves down");
    }
    else if (event.code == "ArrowLeft" || event.key == "L" || event.key == "l") {
        console.log("character moves Left");
    }
    else if (event.code == "ArrowRight" || event.key == "R" || event.key == "r") {
        console.log("character moves Right");
    }
})