export default class view{
    constructor(){
    }
    make_element(id,class_name,parentid,type){
        let e = document.createElement(type)
        e.id = id
        e.classList.add(class_name)
        if(parentid == ''){
            document.body.appendChild(e);
        }else{
           let parent = document.getElementById(parentid) 
           parent.appendChild(e)
        }
        return document.getElementById(id)
    }
}