class to_do_view{
    constructor(){
    }
    render_list(list,listelement){
        list.forEach(element => {
            todo = document.createElement("li")
            todo.innerHTML = `
            <ul id="todos">
                <li class="a_todo">
                    <section class="todo_banner">
                        <header class="todo_name">
                            <h1 class="todo_title">name of the todo</h1>
                        </header>
                        <main>
                            <p class="discription"></p>
                            <button class="todo_done">mark done</button>
                            <button class="todo_done">delete</button>
                        </main>
                    </section>
                </li>
            </ul>
            `
        });
    }
}