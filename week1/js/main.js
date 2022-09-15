//i whaneted to do the js in a its own file
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
    console.log(storyHTML)
    document.querySelector('#story_display').innerHTML= storyHTML
    }

var nots = `<h1>Notes from the exercise and of this week</h1>
<p>this is a cool exercise and a good refresher on JavaScript HTML and CSS  I don't understand why the exercise needs to go into depth on pretty basic stuff overall this week has been a great Refresher and let me polish my skills with the JS a little bit.As you can see I submitted a link and I have the notes displayed by default thank you for the review and I'm very excited for the rest of this course on what I will learn in the future </p>
`
localStorage.setItem("Nots",nots)
document.querySelector("#name_input").value = "Nots"
loadStory()
displayStory()
