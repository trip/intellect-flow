// create card
const createButton = document.querySelector('#createcard')

createButton.addEventListener('click', function() {
    const card = document.querySelector('site-card');
    card.insertAdjacentElement('afterend', card.cloneNode(true));
});

// delete card
const deleteButton = document.querySelector('#delcard')

deleteButton.addEventListener('click', function() {
    const allCardClones = document.querySelectorAll('site-card');
    if (allCardClones.length > 1) {
        allCardClones[allCardClones.length - 1].remove();
    }
 });

// change name
const nameButton = document.querySelector('#modifytitle');

nameButton.addEventListener('click', function() {
    let course = prompt("Name the card:");
    if(course) {
    document.querySelector('site-card').course = course;
    }
});

//change description