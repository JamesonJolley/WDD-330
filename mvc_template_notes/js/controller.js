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
