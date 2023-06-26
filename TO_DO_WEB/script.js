const inputBox = document.getElementById("input_box");
const list_Container = document.getElementById("list_container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must rite something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list_Container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveinfo();
}

//checked or unchecked script

list_Container.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveinfo();
    }
    else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();
        saveinfo();
    }
}, false);

function saveinfo(){
    localStorage.setItem("info",list_container.innerHTML);
}


function display_info(){
    list_Container.innerHTML=localStorage.getItem("info");
}
display_info();