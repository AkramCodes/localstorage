let taskManager  =document.querySelector("#taskManager")
let input  =document.querySelector("#input")
let taskList = document.querySelector("#taskList")


let tasks = null

if(localStorage.getItem("tasks")!=""){
    let existing_tasks = localStorage.getItem("tasks") //string
    tasks = existing_tasks.split(",")
}else{
    tasks = []
}


taskManager.addEventListener("submit",function(e){
    e.preventDefault()

    tasks.push(input.value)
    displayTasks()
    input.value = ''

    localStorage.setItem("tasks",tasks)
})

function displayTasks(){
    taskList.innerHTML = ''
    tasks.forEach(function(value,index){
        taskList.innerHTML += `<li>${value}</li>`
    })
}


displayTasks()


let usersx = []

usersx.push({name:"Rohit",email:"rohit@gmail.com",phone:"123456789"})
usersx.push({name:"Amit",email:"Amit@gmail.com",phone:"78446456644"})


console.log(JSON.stringify(usersx))
localStorage.setItem("temp",JSON.stringify(usersx))