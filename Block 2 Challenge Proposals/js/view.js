export default class view{
    constructor(){
    }
    make_element(id,class_name,parentid,tag,html){
        let e = document.createElement(tag);
        e.id = id;
        e.innerHTML = html;
        e.classList.add(class_name)
        if(parentid == ''){
            document.body.appendChild(e);
        }else{
           let parent = document.getElementById(parentid)
           parent.appendChild(e)
        }
        return document.getElementById(id)
    }
    display_card(parent,name,title,content){
        let card = `<section class ='frame'>
        <header id = 'header_${name}'><h1>${title}</h1></header>
        <main id = 'main_${name}'>
        ${content}
        </main>
        <footer id = 'footer_${name}'></footer>div'
        </section>`
        parent.innerHTML = card
    }
    display_frame(title, name){
        let frame = `
                 <header id = 'header_${name}'><h1>${title}</h1></header>
                 <main id = 'main_${name}'>
                 </main>
                 <footer id = 'footer_${name}'></footer>
                 `
        let the_frame = document.createElement('section');
        the_frame.classList.add('frame');
        the_frame.id = name;
        the_frame.innerHTML = frame;
        document.getElementById('main').appendChild(the_frame);
        return document.getElementById(`main_${name}`)
    }
    display_recipe(parent,recipe,id){
        let list = ``

        for(let _ in recipe.recipes[0].extendedIngredients){
            let s =`<li>${recipe.recipes[0].extendedIngredients[_].original}</li>`
            list += s
        }


        let card = `<section class ='frame'>
        <header id = 'header_${id}'><h1>${recipe.recipes[0].title}</h1></header>
        <main id = 'main_${id}'>
            <section class ='frame'>
            <header ><h1>summary</h1></header>
            <main>
                <section class ='frame'>
                <p>${recipe.recipes[0].summary}</p>
                <img src="${recipe.recipes[0].image}" alt="">
                <h2>Ingredients</h2>
                <ul>${list}</ul>
                </section>
            </main>
            <footer '></footer>
            </section>

            <section class ='frame'>
            <header ><h1>instructions</h1></header>
            <main>
                <section class ='frame'>
                <p>${recipe.recipes[0].instructions}</p>
                </section>
            </main>
            <footer '></footer>
            </section>
        </main>
        <footer id = 'footer_${id}'></footer>
        </section>`
        parent.innerHTML = card
    }

    display_main_frame(title, name){
        let frame = `
                 <header id = 'header_${name}'><h1>${title}</h1></header>
                 <main id = 'main_${name}'>
                 </main>
                 <footer id = 'footer_${name}'>
                    <button id='footer_${name}_save'>save</button>
                    <button id='footer_${name}_new'>get new recipe</button>
                 </footer>
                 `
        let the_frame = document.createElement('section');
        the_frame.classList.add('frame');
        the_frame.id = name;
        the_frame.innerHTML = frame;
        document.getElementById('main').appendChild(the_frame);
        return document.getElementById(`main_${name}`)
    }
    display_recipe_tab(parent,recipe){

        console.log(recipe)
        let tab = this.make_element(recipe.recipes[0].title,'tab',parent.id,'section',`
        <header id = 'header_${recipe.recipes[0].title}'><h1>${recipe.recipes[0].title}</h1></header>
        <main id = 'main_${recipe.recipes[0].title}'>
        <img src="${recipe.recipes[0].image}" alt="">
        </main>
        <footer id = 'footer_${recipe.recipes[0].title}'>
           <button id='footer_${recipe.recipes[0].title}_save'>delete</button>
        </footer>
        `)
        return tab
    }
}