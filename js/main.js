
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
        label:"week3 notes/events",
        url:"week3/events"
    },
    {
        label:"Quiz Ninja!",
        url:"week4/index.html"
    },
    {
        label:"week5",
        url:"week5/index.html"
    },
    {
        label:'todo list',
        url:"todo list/index.html"
    },
    {
        label:'week7',
        url:'week7/index.html'
    },
    {
        label:'week8',
        url:'week8/index.html'
    },
    {
        label:'week9',
        url:'week9/index.html'
    },
    {
        label:'week10',
        url:'week10/index.html'
    },
    {
        label:'Block 2 Challenge Proposals',
        url:'Block 2 Challenge Proposals/index.html'
    },
    {
        label:'video showing the work you accomplished',
        url:'https://youtu.be/LBUx2AEeZYw'
        
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
