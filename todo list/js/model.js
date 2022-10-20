to_do_list={
    'example':'contents'
}


class to_do_model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    save_to_local(){
        to_do_list.forEach(element => {
            localStorage.setItem(element[0], element[1]);
        });
    }
    populate_todo_from_local(){
        localStorage.forEach((element) => {
            to_do_list[element.key] = element
        })
    }
    get_data(){
        return to_do_list
    }
}