import to_do_model from './model.js';
import to_do_view from './view.js';

// Hike controller
export default class Controller {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);

    this.To_do_model = new to_do_model()
    this.To_do_view = new to_do_view(this.To_do_model)
    //for interactive part of the page aka the add button
    this.add_button = document.getElementById('todo_add')
    this.input = document.getElementById('input_todo').value

    this.add_button.addEventListener('click',()=>{
      this.input = document.getElementById('input_todo').value
      if(this.input == ''){
        alert('please enter a task in the input')
      }else{
        this.add_to_list(this.input)
      }
    })

    this.view =document.getElementById('display')
    this.view.addEventListener('change',()=>{this.display_view()})
    this.display_view()
  }
  show_todo(){
    //this displays the to dolist
    this.To_do_view.render_list(this.To_do_model.get_list(),this.parentElement)
  }
  show_completed(){
    this.To_do_view.render_completed(this.To_do_model.get_list(),this.parentElement)
  }
  show_not_completed(){
    this.To_do_view.render_not_completed(this.To_do_model.get_list(),this.parentElement)
  }
  add_to_list(list_value){
    this.To_do_model.add(list_value)
    this.parentElement.innerHTML = ''
    this.display_view()
  }

  add_events(){
    var delete_buttons = document.getElementsByClassName('todo_delete')
    var mark_buttons = document.getElementsByClassName('todo_done')

    for(let i = 0; i in delete_buttons; i++){
      document.getElementById('counter').innerHTML = `number of tasks:${i+1}`
      delete_buttons[i].addEventListener('click',()=>{
        var taskName = delete_buttons[i].parentElement.parentElement.parentElement.parentElement.id
        this.To_do_model.delete_item(taskName)
        this.parentElement.innerHTML = ''
        this.display_view()
      })
    }
    for(let i = 0; i in mark_buttons; i++){
      var task = mark_buttons[i].parentElement.parentElement.parentElement.parentElement

      mark_buttons[i].addEventListener('click', ()=>{
        let task_name = mark_buttons[i].parentElement.parentElement.parentElement.parentElement.id
        this.To_do_model.mark_done(task_name)
        this.parentElement.innerHTML = ''
        this.display_view()
      })
    }
  }
  display_view(){
    this.parentElement.innerHTML = ''
    if(document.getElementById('display').value == 'all'){this.show_todo()}
    if(document.getElementById('display').value == 'completed'){this.show_completed()}
    if(document.getElementById('display').value == 'not completed'){this.show_not_completed()}
    this.add_events()
  }
}
