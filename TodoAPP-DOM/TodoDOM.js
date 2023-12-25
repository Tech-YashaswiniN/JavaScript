let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    let delbtn = document.createElement("button");


    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = ""

    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);


})

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})
