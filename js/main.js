const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]


class main_contaner{
    constructor(){
       this.contaner = document.createElement("div") 
       this.contaner.className = "main"
       document.body.appendChild(this.contaner)
    }
}
//oragin point of the 
function main(){
    Main = main_contaner()
}

//makes new elements and apends them to the dom
main()
