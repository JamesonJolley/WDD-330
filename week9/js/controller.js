import model from './model.js';
import view from './view.js';

// Hike controller
export default class Controller {
  constructor() {
    this.model = new model()
    this.view = new view()
    this.view.make_element('main','main','','div')
    this.maindiv = document.getElementById('main')
    this.display_view()
    
  }
  display_view(){
    // control flow for what is displayed
    this.view.render_notes(this.model.get_all_notes(),'main')
  }
}


// main.js from the book
// the book is wrong 
{
let angle = 0;
setInterval( () => {
    const squareElement = document.getElementById('square');
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);
}


{
  
let angle = 0;
function rotate() {
    const squareElement = document.getElementById('square2');
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);
}
