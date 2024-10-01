let colorList = [];

let btn = document.querySelector(".genColor");

btn.addEventListener("click",function(){
    let h3 = document.querySelector('h3');
    let randomColor =getRandomColor();
    h3.innerText=randomColor;

    let colorBox = document.querySelector('.container div');
    colorBox.style.backgroundColor= randomColor;

    let colors = randomColor;
    colorList.push(colors);

})


function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color
}

let prevBtn = document.querySelector('.prevColor');

prevBtn.addEventListener('click',function(){
    let colorBox = document.querySelector('.container div');
    console.log(colorList.slice(colorList.length-2, colorList.length-1))
    let prevclr = colorList.slice(colorList.length-2, colorList.length-1);
    colorBox.style.backgroundColor = prevclr;

    let h3 = document.querySelector('h3');
    h3.innerText = prevclr;
})




