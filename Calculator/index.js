let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let str = "";

for(let btn of buttons){
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }

        
        else if(event.target.innerHTML == 'AC'){
            str="";
            input.value=str;
        }

        else if(event.target.innerHTML == 'DEL'){
            str = str.slice(0, str.length-1);
            input.value = str;
        }

        else{
            str+=event.target.innerHTML;
            input.value=str;
        }
    })
}
