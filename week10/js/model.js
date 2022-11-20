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