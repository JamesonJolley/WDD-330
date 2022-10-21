var to_do_list=[
    'example',
]

export default class to_do_model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    populate_to_local(){
        var i = 0
        to_do_list.forEach(element => {
            localStorage.setItem(i, element[i]);
            i++
        });
    }
    populate_todo_from_local(){
        var i = 0
        localStorage.forEach((element) => {
            to_do_list[i] = element
            i++
        })
    }
    sync_data(){
        this.populate_to_local()
        this.populate_todo_from_local()
    }
    get_data(){
        sync_data()
        return to_do_list
    }
    add_todo(todo){
        to_do_list.push(todo)
        sync_data()
    }
}