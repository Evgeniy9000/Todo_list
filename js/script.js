
let toDo = function Todo() {
    let todoArr = []

    this.create = function () {
        let htmlTodo = `<header>
        <h1>Todo list</h1>
    </header>
        <div class= "todo_option" >
                            <input type="text" id="todo__input">
                         </div>
                         <div class="todos">
                            <ul id="todos__lists">
                            </ul>
                        </div>`
        let element = document.querySelector('.todo__list')
        element.innerHTML = htmlTodo

        let input = document.querySelector('#todo__input')
        input.addEventListener('keyup', (e) => {
            if (e.keyCode == '13') {
                this.add(e.target.value)
                e.target.value = ""
            }

        })

    }

    this.add = function (task) {
        let todoTask = {
            todo: task,
            flag: true
        }
        todoArr.push(todoTask)
        console.log(todoArr)
        this.show()
    }


    this.delete = function (id) {
        todoArr.splice(id, 1);
        this.show()


    }



    this.show = function () {
        let elementUl = document.querySelector('#todos__lists')
        console.log(elementUl)
        elementUl.innerHTML = ""

        todoArr.forEach((item, index) => {
            let li = document.createElement('li')
            li.classList.add('todo__li')
            li.innerHTML = `${item.todo}<br> <button class ="btn__delete" id="${index}">Удалить</button>`
            

            elementUl.appendChild(li)
        })
        

     
        let deleteBtn = document.querySelectorAll('.btn__delete')

        deleteBtn.forEach((btn, index) => {
            btn.addEventListener('click', (event) => {
                let id = +event.target.id
                this.delete(id)

            })
        })

    }


}

window.addEventListener('load', () => {
    let todo = new toDo()
    todo.create();
})