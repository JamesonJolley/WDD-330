export default class to_do_view{
    constructor(model){
        this.To_do_model = model
    }
    render_list(list,listelement){

        for (let i = 0; i < localStorage.length; i++) {
            let storedValue = localStorage.key(i);
            let data = JSON.parse(localStorage.getItem(storedValue))
            this.render_todo(data,listelement)

        }
    }
    render_completed(list,listelement){
        for (let i = 0; i < localStorage.length; i++) {
            let storedValue = localStorage.key(i);
            let data = JSON.parse(localStorage.getItem(storedValue))
            if (data.completed == true){this.render_todo(data,listelement)}
        }
    }
    render_not_completed(list,listelement){
        for (let i = 0; i < localStorage.length; i++) {
            let storedValue = localStorage.key(i);
            let data = JSON.parse(localStorage.getItem(storedValue))
            if (data.completed == false){this.render_todo(data,listelement)}
        }
    }
    render_todo(data,listelement){
        var todo = document.createElement("li")
        if(data.completed == true){
            todo.classList.add('done')
        }
        todo.innerHTML = `
        <div class="todo" id="${data.content}" >
            <li class="a_todo">
                <section class="todo_banner">
                    <header class="todo_name">
                        <h1 class="todo_title">${data.content}</h1>
                    </header>
                    <main>
                        <button id="${data.content}_done" class="todo_done">mark done</button>
                        <button id="${data.content}_delete" class="todo_delete">delete</button>
                    </main>
                </section>
            </li>
        </div>
        `
        listelement.appendChild(todo)
    }
}