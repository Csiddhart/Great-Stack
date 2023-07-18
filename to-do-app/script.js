const inptbox = document.getElementById("input-text");
const lt = document.getElementById("list");

function addTask(){
    if(inptbox.value === ''){
        alert("YOU MUST WRITE SOMETHING!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inptbox.value;
        lt.appendChild(li); 
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inptbox.value="";
    saveData();
}

lt.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();