import to_do_model from './model.js';
import to_do_view from './view.js';

// Hike controller
export default class Controller {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);

    this.To_do_model = new to_do_model()
    this.To_do_view = new to_do_view()

    //for interactive part of the page aka the add button
    this.add_button = document.getElementById('todo_delete')
    this.add_button.addEventListener('click',()=>{
      
    })
  }
  show_todo(){
    //this displays the to dolist

  }
}