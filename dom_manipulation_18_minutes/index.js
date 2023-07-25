// ADDING ELEMENTS TO THE PAGE: append(), appendChild()

// selecting the element we are adding stuff to
const body = document.body; // here we are selecting the body element

// // append():
// // – you can append elements and strings
// body.append('Hello, world! ');

// // – you can append multiple things simultaneously
// body.append('I love ', 'you.');

// // you can use it on any element: body.append(), div.append(), etc.

// //appendChild():
// // – you can only append elements (div, main, span, a, etc.)
// // – you can only append one thing at a time

// const div = document.createElement('div');

// // setting the text we want to show up on our div: innerText & textContent
// // innerText and textContent are similar, but defer in the way they print out the text

// // div.innerText = 'You are my boo.'
// div.textContent = '<strong>I love snuggling.<strong>' // renders out the content as plain text

// // div.innerHTML = '<strong>I love snuggling.</strong>' // renders the content according to the html tags

// body.append(div); //same as body.appendChild(div) in this case

// // same can be accomplished in a more secure way by:
// const strong = document.createElement('strong');
// strong.innerText = 'I love shopping.';
// div.append(strong);
// body.append(div);

const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

// removing an element from the DOM
spanBye.remove(); // removes an element (in this case, spanBye) from the HTML

div.append(spanBye); // adds spanBye again – we still have access to it

div.removeChild(spanHi); // removes an element from the parent

div.append(spanHi);

//accessing element's attributes wit getAttribute()
console.log(spanHi.getAttribute('title'));

// same result as: 
console.log(spanHi.id, spanHi.title);

// changing an attribute's value
spanHi.setAttribute('id', 'newIdValue');
spanBye.title = 'addedTitle';
spanBye.id = 'yetAnotherIdValue';

// removing an element's attribute with removeAttribute()
spanHi.removeAttribute('title');
spanHi.removeAttribute('id');

// getting a data attribute with dataset()
// data attrbiutes are costum attributes that you can add to elements
console.log(spanHi.dataset) // returns an object in which the data attributes as properties (without the word 'data')

console.log(spanHi.dataset.test);
console.log(spanHi.dataset.longerName);

// setting a new data attribute with dataset()
spanHi.dataset.newName = 'new name' // it will convert the camelCase 'newName' into a hifenated version and adds the 'data-' at the beginning so you know that it is a custom data attribute


// ************ CLASSES ************

// accessing the property 'classList': classList has a tone of different methods you can use to modify/add/remove different classes

// adding a class with classList.add()
spanHi.classList.add('new-class');

// removing a class with classList.remove()
spanHi.classList.remove('hi1');

//classList.toggle() – removes the class if it already exists and adds it if it is newa
spanHi.classList.toggle('new-class', false); // you can add a boolean (true to 'add' and 'false' to remove)

// directly modifying the 'style' property of any element
// the 'style' property is a way to access any CSS property
spanHi.style.color  = 'red';
spanHi.style.backgroundColor = 'yellow' // here, you need to convert the CSS property name 'background-color' to camelCase

// ************ REAL WORLD EXAMPLE ************

const buttons = document.querySelectorAll('[data-modal-id]');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const modalId = button.dataset.modalId;
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
        modal.style.color = 'red';
        modal.style.backgroundColor = 'yellow';
        console.log('style color:', modal.style.color, 'backgroundColor:', modal.style.backgroundColor)
    });
});