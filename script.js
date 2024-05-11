const inputBox=document.getElementById("input_box")
const list_container=document.getElementById("list-container")

function addTask() {
    if (inputBox.value==='') {
        alert("You need to Enter a Task")
    }
    else{
        //to add new tasks
        const newtask=document.createElement("li");
        newtask.innerText=inputBox.value;
        list_container.appendChild(newtask);

        //to add the cross icon to delete a TASK
        const cross=document.createElement("span");
        cross.innerHTML="\u00d7";      
        newtask.appendChild(cross);       
    }
    inputBox.value='';
    savedTask()
}

//function to check completed task. remove crossed tasks
list_container.addEventListener("click", function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedTask()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedTask()
    }
},false)

//to store data and save the added tasks in localstorage

function savedTask(){
    localStorage.setItem("data",list_container.innerHTML);
}
function showTask(){
    list_container.innerHTML=localStorage.getItem("data")
}
showTask();
