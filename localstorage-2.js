
// let demo = document.querySelector("#demo")

let form = document.querySelector("#demo")
let input = document.querySelector("#input")
let input_2 = document.querySelector("#input-2")
let input_3 = document.querySelector("#input-3")
let addTaskList = document.querySelector("#addTaskList")





let ArrayX = []

if(localStorage.getItem("task")!= '' && localStorage.getItem ("task")!= null){

    let store = localStorage.getItem("task") //string
    store = JSON.parse(store)
    ArrayX = store
}else{
    ArrayX = []
}

form.addEventListener("submit",function(e){
    e.preventDefault()
   
    let temp = {name:input.value, email:input_2.value, phone:input_3.value}

    ArrayX.push(temp)

    localStorage.setItem("task",JSON.stringify(ArrayX))
    console.log(ArrayX)


    input.value = '';
    input_2.value = '';
    input_3.value = '';

    printValues()


    
})

// let restore = localStorage.getItem("task")




// addTaskList.innerHTML = `

// <li>${restore}</li>

// `



printValues()


function printValues(){
    addTaskList.innerHTML =''
   ArrayX.forEach(function(value,index){
    addTaskList.innerHTML +=`
    <div class="mainclass"> 
    <h2 class="heading">First User </h2>   
    <div class="input"> <span> Your Name is </span> <input type="text" class="inputclass" value="${value.name}" readonly> </div>
    <div class="input"> <span> Your Name is </span> <input type="text" class="inputclass" value="${value.email}" readonly> </div>
    <div class="input"> <span> Your Name is </span> <input type="text" class="inputclass" value="${value.phone}" readonly> </div>
    </div>
    `
   })
}



