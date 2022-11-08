import model from './model.js';
import view from './view.js';

// Hike controller
export default class Controller {
  constructor() {
    this.model = new model();
    this.view = new view();
    this.view.make_element('main','main','','div');
    this.maindiv = document.getElementById('main');
    this.display_view();
    this.workers();
    this.mini_messaging();
    //workers


  }
  mini_messaging(){
    const URL = 'wss://echo.websocket.org/';
    const outputDiv = document.getElementById('output');
    const form = document.forms[0];
    const connection = new WebSocket(URL);
    connection.addEventListener('open', () => {
      output('CONNECTED');
  }, false);
  function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}
function output(message) {
  const para = document.createElement('p');
  para.innerHTML = message;
  outputDiv.appendChild(para);
}
connection.addEventListener('message', (event) => {
  output(`RESPONSE: ${event.data}`);
}, false);
  }
  display_view(){
    // control flow for what is displayed
    this.view.render_notes(this.model.get_all_notes(),'main')
  }
  workers(){
    const btn = document.getElementById('rainbow');
    const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
    function change() {
      document.body.style.background = rainbow[Math.floor(7*
      Math.random())];
    }
    btn.addEventListener('click', change);
    const form = document.forms[0];
    form.addEventListener('submit', factorize, false);

    function factorize(event) {
      // prevent the form from being submitted
      event.preventDefault();
      document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
      const number = Number(form.number.value);

      if(window.Worker) {
          const worker = new Worker('factors.js');
          worker.postMessage(number);
          worker.addEventListener('message', (event) => {
          document.getElementById('output').innerHTML = event.data;
          }, false);
      }
  }

  }
}




// Animation
// the book is wrong 
{
let angle = 0;
setInterval( () => {
    const squareElement = document.getElementById('square');
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);
}

//requestAnimationFrame
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


