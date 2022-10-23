
export default class to_do_model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    add(item){
        localStorage.setItem(item,JSON.stringify({'id': Date.now(), 'content': item, 'completed': false}))
    }
    get_list(){
        return localStorage
    }
    delete_item(name){
        localStorage.removeItem(name)
    }
    mark_done(name){
        let data = JSON.parse(localStorage.getItem(name))
        data.completed = true
        localStorage.setItem(name,JSON.stringify(data))
    }
}