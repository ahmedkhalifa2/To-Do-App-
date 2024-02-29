let btn = document.getElementById("btn-add")
let inputText = document.getElementById("inputText")
let TasksContent = document.querySelector(".TasksContent")
let deleteIcon = document.querySelector(".deleteIcon")
let task = document.querySelectorAll(".task")
let text="", allTasks
inputText.addEventListener("input",function(){
    text = inputText.value
})

btn.addEventListener("click",function(){
    if(text !==""){
         allTasks = JSON.parse(localStorage.getItem("Tasks")) || []
        for(let i=0;i<allTasks.length;i++){
            if(allTasks[i]==text){
                alert("this task is allredy exist")
                return
            }
        }
        TasksContent.innerHTML +=`<div class="addedTasks">
            <span class="task" >${text}</span>
            <i class="fas fa-times deleteIcon"></i>
        </div>`
        allTasks.push(text)
        localStorage.setItem("Tasks",JSON.stringify(allTasks))
    }
})
TasksContent.addEventListener("click",function(event){
    if(event.target.classList.contains("deleteIcon")){
        event.target.parentElement.remove()
        allTasks.forEach(function(element){
            if(element==event.target.previousElementSibling.innerText) {
                allTasks.splice(allTasks.indexOf(element),1)
                localStorage.setItem("Tasks",JSON.stringify(allTasks))
            }
        })
    }
    else if(event.target.classList.contains("task")){
        event.target.classList.toggle("checked")
    }
})

window.addEventListener("load",function(){
    allTasks = JSON.parse(localStorage.getItem("Tasks")) || []
    allTasks.forEach(function(element){
        TasksContent.innerHTML +=`<div class="addedTasks">
            <span class="task" >${element}</span>
            <i class="fas fa-times deleteIcon"></i>
        </div>`
    })
})



