import model from './model.js';
import view from './view.js';

// Hike controller
export default class Controller {
  constructor() {
    this.model = new model()
    this.view = new view()
    this.maindiv = this.view.make_element('main','main','','div')
    this.display_view()
  }
  display_view(){
    // control flow for what is displayed
  }
}
