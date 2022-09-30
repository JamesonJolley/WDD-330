
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
class A extends Component{
    constructor(href,text){
        this.element = document.createElement('a')
        this.element.href = href
        this.element.innerHTML= text
    }
}
class link extends Component{
    constructor(href,name){
        super(Component)
        this.element = document.createElement("li")
        this.element.className = "link"
        this.element.innerHTML= `${name}`
        this.element.addEventListener("click",()=>{
            document.location.href = href
        })
    }
}
class nav extends Component{
    constructor(links){
        super(Component)
        this.element = document.createElement("ul");
        this.element.className = "nav";
        this.populate = function(links){
            links.forEach(element => {
                var newl = new link(element.url,element.label)
                this.element.appendChild(newl.element)
            });
        }
        this.populate(links)
    }
}

function main(){
    const links = [
    {
        label:"Home",
        url:"../index.html"
    },
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
	{
		label:"week2 notes",
		url:"week2/index.html"
	},
    {
        label:"week3 notes",
        url:"week3/index.html"
    },
    {
        label:"week3 notes/events.html",
        url:"week3/events.html"
    }
]
    //makes a content div
    Main = new main_div()
    
    // addds a header
    head = new header("Jameson M Jolley's Portfolio")
    head.add(Main.element)

    //adds  the nav
    nav_bar = new nav(links)
    nav_bar.add(Main.element)
    
}

main()
