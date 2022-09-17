
class Component{
    constructor(){
        this.add = function(Destination){
            Destination.appendChild(this.element);
        }
    }
}
class main_div extends Component{
    constructor(){
        super(Component)
        this.element = document.createElement("div");
        this.element.className = "main";        
        this.add(document.body)
    }
}
class header extends Component{
    constructor(text){
        super(Component)
        this.element = document.createElement("header")
        this.element.innerHTML = text
    }
}
class link extends Component{
    constructor(href,name){
        super(Component)
        this.element = document.createElement("li")
        this.element.className = "link"
        this.element.innerHTML= `<a href=${href}>${name}</a>`
    }
}

class nav extends Component{
    constructor(){
        super(Component)
        this.element = document.createElement("ul");
        this.element.className = "nav";
        this.populate = function(links){
            links.forEach(element => {
                var newl = new link(element.url,element.label)
                this.element.appendChild(newl.element)
            });
        }
    }
}

function main(){
    const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]
    //makes a content div
    Main = new main_div()
    
    // addds a header
    head = new header("Jameson M Jolley's Portfolio")
    head.add(Main.element)

    //adds  the nav
    nav_bar = new nav()
    nav_bar.populate(links)
    nav_bar.add(Main.element)
    
}

main()
