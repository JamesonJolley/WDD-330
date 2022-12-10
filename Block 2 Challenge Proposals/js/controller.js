import model from './model.js';
import view from './view.js';

// Hike controller
export default  class Controller {
  constructor() {
    this.model = new model()
    this.view = new view()
    this.maindiv = this.view.make_element('main','main','','div','')
    this.display_view()
  }
  async display_view(){
    // creates the parents in a array
    var parents = [this.view.display_main_frame('new recipe','recipe'),this.view.display_frame('saved','saved')]
    // gets a new recipe
    var recipe = await this.model.get_new_recipe();
  
    console.log(recipe)
    // shows a new recipe
    this.show_recipe(parents,recipe);

    //adds new
    document.getElementById('footer_recipe_save').addEventListener('click',()=>{
      this.model.set_recipes(recipe,recipe.recipes[0].title)
      this.show_saved(parents)
    })
    document.getElementById('footer_recipe_new').addEventListener('click',async ()=>{
      //resets the recipe
      recipe = await this.model.get_new_recipe();
      this.show_recipe(parents,recipe);

    })
      this.show_saved(parents)
  }
  async show_recipe(parent,recipe){
    parent[0].innerHTML = '';
    this.view.display_recipe(parent[0],recipe,'displayed')
  }
  async show_saved(parent){
    parent[1].innerHTML = ''
    let the_recipes = this.model.get_recipes()
    for (let _ in the_recipes){
        if(the_recipes[_] == 'deleted'){
        }else{
      let recipe_tab = this.view.display_recipe_tab(parent[1],the_recipes[_])
      let id = recipe_tab.id
      document.getElementById(`main_${id}`).addEventListener('click',() =>{
        this.show_recipe(parent,the_recipes[_]);
      })
      document.getElementById(`footer_${id}_save`).addEventListener('click',() =>{
        this.model.delete_recipe(id)
        this.show_saved(parent);
      })
      console.log(recipe_tab)
     }
    }
  }
}


