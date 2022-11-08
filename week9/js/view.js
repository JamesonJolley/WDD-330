export default class view{
    constructor(){
    }
    render_notes(notes,parentid){
        for (let i in notes){
            console.log(i)
            let view = `
            <header id ='card_header_${i}' class="card_header"><h4>${i}</h4></header>
            <body  id ='card_body_${i}' class="card_body">
            ${notes[i]}
            </body>
            <footer id ='card_footer_${i}' class="card_footer"></footer>
        `
        let element = this.make_element(i,`card`,parentid,'section',view)
        }
        
    }
    make_element(id,class_name,parentid,type,view =''){
        let e = document.createElement(type)
        e.id = id
        e.classList.add(class_name)
        e.innerHTML = view
        if(parentid == ''){
            document.body.appendChild(e);
        }else{
           let parent = document.getElementById(parentid) 
           parent.appendChild(e)
        }
        return document.getElementById(id)
    }
}