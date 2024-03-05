let addButton = document.getElementById("addButton");
let deleteButton = document.getElementById("deleteButton");
let input = document.getElementById("inpt");
let unorderedList = document.getElementById("unorderedList");
let ul = document.getElementById("task-ul");
let announce = document.getElementById("announce");

let edit;

addButton.addEventListener("click",function (){
    
    let li = document.createElement("li");
    li.classList.add("listItems");

    if(input.value === ""){
        announce.innerText = "You did not write any task!";
        announce.style.textAlign = "center";
        announce.style.marginTop = "10px";
        announce.style.fontSize = "1.1rem";
        setTimeout(() => {
            announce.style.display = "none";
        }, 1500);
        saveData();
    }
    else{
        li.innerHTML = input.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       /* edit = document.createElement("button");
        edit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`; 
        edit.style.border = "1px solid #d1c2c2";
        edit.style.position = "absolute";
        edit.style.right = "55px";
        edit.style.padding = "2px 15px";
        edit.style.fontSize = "20px";
        edit.style.bottom =  "12px";
        edit.style.borderRadius = "8px";
        edit.style.backgroundColor = "#d1c2c2";
        li.appendChild(edit);*/
        saveData();
        
    }
    input.value = "";
    saveData();
})

ul.addEventListener("click",function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    // else if(e.target.tagName === "BUTTON"){
    //     li.contentEditable = true;
    //     // input.value.focus();
    // }
})
deleteButton.addEventListener("click",function (e){
    let li = document.querySelectorAll(".listItems");
    li.forEach((elm)=>{
        elm.remove();
    })
    saveData();
})

function saveData() {
    localStorage.setItem("data",ul.innerHTML);
}
function showData(){
    ul.innerHTML = localStorage.getItem("data");
}
function removeData(){
    localStorage.removeItem(ul.innerHTML);
}
showData();
removeData();