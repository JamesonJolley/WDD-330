var notes = {
    'Animation':`
    <div id='square'></div>
    <p>the book is wrong the DOM query is out of scope and you need to move it into scope :P</p>
    <script src='main.js' differ></script>
    `,
    'requestAnimationFrame':`
    <div id='square2'></div>
    <p>This method of the window object works in much the same way as the window.setInterval() method, although it has a number of improvements to optimize its performance</p>
    <p>this is much better than the other one lol :)</p>
    <script src='main.js' differ></script>
    `,
    'updated_ quiz_ninja':`I updated <a href ="https://jamesonjolley.github.io/WDD-330/week4/index.html">quiz Ninja</a> on the 7th of November 2022`,
    'html5':
    `
    inspect this:
    <div id='hero' data-powers='flight superSpeed'>
    Superman
    </div>
    is an example of data attributes
    `,
    'workers':`<button id='rainbow'>Change Color</button>
    <form>
        <label for='number'>Enter a Number to Factorize:</label>
        <input id='number' type='number' name='number' min=1 value='20'>
        <button type='submit'>Submit</button>
    </form>
    <div id='output'></div>
    `,
    'mini-messaging':
    `
    <form>
        <label for='message'>Enter a Message:</label>
        <input type='text' name='message'>
        <button type='submit'>Submit</button>
    </form>
    <div id='output'></div>
    <script src='main.js'></script>
    
    `,
    'all done':"<a href='https://jamesonjolley.github.io/WDD-330/'>go home</a>"
}
export default class model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    get_all_notes(){
        return notes
    }
}