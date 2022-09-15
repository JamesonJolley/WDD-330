const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]

var elements = [
    {
        tag:"div",
        Destination:"main",
        content:''
    },
]
//oragin point of the 
function main(){
create_elements(elements)    
}

//makes new elements and apends them to the dom
function create_elements(elements){
    elements.forEach(element => {
        //this will update all the the elaments inside of the elements array
        curent_e  = document.createElement(element.tag)
        element_destination = document.querySelector(element.Destination)
        curent_e.innerHTML = element.content
        element_destination.appendChild(curent_e)
    });
}

main()
