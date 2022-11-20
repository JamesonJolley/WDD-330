var notes = {
    'example':'this will peer inside of an HTML element so <a>tags will work</a>',
    'form validation':'When you enter data, the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application. Validation done in the browser is called client-side validation, while validation done on the server is called server-side validation. In this chapter we are focusing on client-side validation.',
    'form validation types and example':`
    <section aria-labelledby="using_built-in_form_validation"><h2 id="using_built-in_form_validation"><a href="#using_built-in_form_validation">Using built-in form validation</a></h2><div class="section-content"><p>
  One of the most significant features of modern form controls is the ability to validate most user data without relying on JavaScript.
  This is done by using validation attributes on form elements.
  We've seen many of these earlier in the course, but to recap:
</p>
<ul>
  <li><a href="/en-US/docs/Web/HTML/Attributes/required"><code>required</code></a>: Specifies whether a form field needs to be filled in before the form can be submitted.</li>
  <li><a href="/en-US/docs/Web/HTML/Attributes/minlength"><code>minlength</code></a> and <a href="/en-US/docs/Web/HTML/Attributes/maxlength"><code>maxlength</code></a>: Specifies the minimum and maximum length of textual data (strings).</li>
  <li><a href="/en-US/docs/Web/HTML/Attributes/min"><code>min</code></a> and <a href="/en-US/docs/Web/HTML/Attributes/max"><code>max</code></a>: Specifies the minimum and maximum values of numerical input types.</li>
  <li><code>type</code>: Specifies whether the data needs to be a number, an email address, or some other specific preset type.</li>
  <li><a href="/en-US/docs/Web/HTML/Attributes/pattern"><code>pattern</code></a>: Specifies a <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">regular expression</a> that defines a pattern the entered data needs to follow.</li>
</ul>
<div class="notecard note" id="sect2">
</div></div></section>
    </br>
    <h1>example</h1>
    <form>
        <label for="choose">Would you prefer a banana or cherry?</label>
        <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry"/>
        <button>Submit</button>
    </form>

    </br> 
    <h2>example 2 Constraining</h2>
    <form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
    `,
    'Full example':`
    <form>
  <p>
    <fieldset>
      <legend>Do you have a driver's license?<span aria-label="required">*</span></legend>
      <!-- While only one radio button in a same-named group can be selected at a time,
           and therefore only one radio button in a same-named group having the "required"
           attribute suffices in making a selection a requirement -->
      <input type="radio" required name="driver" id="r1" value="yes"><label for="r1">Yes</label>
      <input type="radio" required name="driver" id="r2" value="no"><label for="r2">No</label>
    </fieldset>
  </p>
  <p>
    <label for="n1">How old are you?</label>
    <!-- The pattern attribute can act as a fallback for browsers which
         don't implement the number input type but support the pattern attribute.
         Please note that browsers that support the pattern attribute will make it
         fail silently when used with a number field.
         Its usage here acts only as a fallback -->
    <input type="number" min="12" max="120" step="1" id="n1" name="age"
           pattern="\d+">
  </p>
  <p>
    <label for="t1">What's your favorite fruit?<span aria-label="required">*</span></label>
    <input type="text" id="t1" name="fruit" list="l1" required
           pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your e-mail address?</label>
    <input type="email" id="t2" name="email">
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
    `,
    'constraint validation API':`
    <form>
  <label for="mail">
    I would like you to provide me with an e-mail address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
    `,
    'A more detailed example':`
    
    <form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
    `
}
export default class model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    get_all_notes(){
        return notes
    }
}