
function loadStory(){
    var storyName = document.querySelector("#name_input").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById('story_editor').value = storyHTML
    }
function saveStory(){
    var storyName = document.getElementById('name_input').value
    var storyHTML = document.getElementById('story_editor').value
    localStorage.setItem(storyName, storyHTML)
    }
function displayStory(){
    var storyHTML = document.getElementById("story_editor").value
    //console.log(storyHTML)
    document.querySelector('#story_display').innerHTML= storyHTML
    }

var nots = `<h1>Notes from the exercise and of this week</h1>
<p>this is a cool exercise and a good refresher on JavaScript HTML and CSS  I don't understand why the exercise needs to go into depth on pretty basic stuff overall this week has been a great Refresher and let me polish my skills with the JS a little bit.As you can see I submitted a link and I have the notes displayed by default thank you for the review and I'm very excited for the rest of this course on what I will learn in the future </p>
<h2>Master Mobile UX</h2>

<h1>Note_1, 16 Sept 2022</h1>
-------------------
<p>
Designing for the smallest layout is the easiest and most elegant way to design a beautiful application. 

This is because you are forced to focus on the content and functionality first. 

If you do not design for your mobile first you will eventually have to rewrite the entire application. </p>
<h1>The expectations of the users </h1>
<p>
People often don't know what they want until you show it to them. Don't listen to what people say observe what they're doing and then adapt accordingly 
</p>
<h2>Things customers look for </h2>
<ul>
	<li>#1: Loyalty </li>
	<li>#2: Satisfy their needs </li>
	<li>#3: Being succinct and Timely </li>
</ul>

<p>
Time does equal money at large scales 
Reduce the cognitive load on the user make it as simple as possible
</p>


`
localStorage.setItem("Nots",nots)
document.querySelector("#name_input").value = "Nots"
loadStory()
displayStory()
