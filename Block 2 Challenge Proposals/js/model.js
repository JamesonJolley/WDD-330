const key = 'c4966ce4caba4448a7c67ecffa37488b';


const baseurl = `https://api.spoonacular.com/recipes/random?apiKey=${key}`

const aurl = `https://api.spoonacular.com/recipes/716429/information?apiKey=c4966ce4caba4448a7c67ecffa37488b&includeNutrition=true`;
const url =`https://api.spoonacular.com/food/ingredients/search?apiKey=${key}`;

export default class model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
        this.date = new Date();
        this.recipes ={};
        if(!localStorage.getItem('recipes')){
          localStorage.setItem('recipes',JSON.stringify(this.recipes))
        }
        else{
          this.load_recipes();
        }
    }
    getJSON(url) {
        return fetch(url)
        .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
          .catch(function(error) {
            console.log(error);
          });
      }
    get_recipes(){
      return this.recipes
    }
    set_recipes(recipe,name){
     this.recipes[name] = recipe;
     localStorage.setItem('recipes',JSON.stringify(this.recipes))
    }
    delete_recipe(name){
      this.recipes[name]= ['deleted'];
      localStorage.setItem('recipes',JSON.stringify(this.recipes))
    }
    get_new_recipe(){
      return this.getJSON(baseurl);
    }
    load_recipes(){
      this.recipes = JSON.parse(localStorage.getItem('recipes'))
    }
    add_date(recipe){
      recipe.date = new Date();
    }
}