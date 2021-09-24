document.addEventListener("DOMContentLoaded", () => {

const task = document.querySelector(`#task`)
const btn_submit = document.querySelector(`#submit`)
const list = document.querySelector('.list-group')
const clear = document.querySelector(`.clear`)

let arr_task = []
let task_ID = 0


//INITALIZING TODO ITEMS
class TodoObj{
    
    constructor(id, description){
        this.id = id
        this.description = description
    }
    Task(){
        CreateTodo(this.id, this.description)
    }

} 

//CREATING TODO ITEMS
const CreateTodo = (objID, objDes) => {
    let Todo = {
        ID: objID,
        Description: objDes
    }
    arr_task.push(Todo)
    DisplayTodo()
}


//DISPLAYING TODO ITEMS
const DisplayTodo = () => {

    let list_group_item = document.createElement('li')
    
    arr_task.forEach(e => {
        let id = e['ID']
        let des = e['Description']
        list_group_item.innerHTML = 

        `<li class="list-group-item">
        ${des}
        <a href="javascript:void(0)" class="close btn btn-danger" id='${id}'>&times</a>
        </li>
        
        `
        list.append(list_group_item)
    })
}


//WHEN BUTTON SUBMIT CLICKED
btn_submit.addEventListener(`click`, (e) => {
    e.preventDefault()
    task_ID += 1
    const NewObj = new TodoObj(task_ID, task.value)
    NewObj.Task()
    task.value = ''
})


//DELETING TODO ITEMS
list.addEventListener(`click`, (e) => {
    let TodoList = e.target.parentElement

    if(confirm(`Want to delete this task?`) == true ){
        TodoList.remove()
    }

})

//CLEAR ALL TODO ITEMS
clear.addEventListener(`click`, () => {
    if(confirm(`Want to delete all task?`) == true){

        let list_item = document.querySelectorAll(`.list-group-item`)
        arr_task = []
        list_item.forEach((e) => {
        e.remove()

    })
    }
})

})
