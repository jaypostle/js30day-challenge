const clearAllbtn = document.querySelector('#clear-all');
const checkAllbtn = document.querySelector('#check-all');
const uncheckAllbtn = document.querySelector('#uncheck-all');

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// will try to get this from local storage. if none exists, will fall back to an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    // this in "this" case is the form
    const text = (this.querySelector('[name=item')).value;
    const item = {
        text,
        done: false
    };
    // remember, "this" is the form element. Forms have a method called reset.

    items.push(item);

    // run populate list with our items array and our items list destination (inner html location)
    populateList(items, itemsList);
    // first parameter in set item is the key that it will be called in local storage
    // local storage althought it seems like an object, it's a key value storage , can only use strings

    localStorage.setItem('items', JSON.stringify(items));
    // it looks like an object but really it's just a string of text!
    // then use JSON.parse to take the string and make it back into an array of objects
    this.reset();

    console.log(items);
}

// using parameters here means i can pass in ANY array of plates and ANY destination to make this function work
function populateList(plates = [], platesList) {
    // needs a list of plates to populate
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type='checkbox' data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>

            </li>
        `;
        // .join takes the array and makes it one big string
    }).join('');
}

// event delegation, rather than looking for a click or a change on the html item directly, we look for somebody who is going to be on teh page at the time of listening
function toggleDone(e) {
    if(!e.target.matches('input')) return// skip this inless it's an input
    // go to items array and find the item that was checked, then flip the doneness
    const el = e.target;
    // grab the index of the target that was clicked
    const index = el.dataset.index;
    // change the property
    // use that index to pick the array item you want and flip the doneness
    items[index].done = !items[index].done;
    // update that in local storage
    localStorage.setItem('items', JSON.stringify(items));
    // visually update the html
    populateList(items, itemsList);

};



addItems.addEventListener('submit', addItem);
populateList(items, itemsList);

itemsList.addEventListener('click', toggleDone);

function clearAll(e) {
    // delete all from local storage
    // reset the populated list
    localStorage.clear();
    populateList([], itemsList);
    // console.log(e);
}

function checkAll(e) {
    // map through all items in teh items array and set their doneness
    items.map((plate) => plate.done = true);
    // console.log(e);
    // repopulate the array
    populateList(items, itemsList);
}

function uncheckAll() {
// map through all items in teh items array and set their doneness
    items.map((plate) => plate.done = false);
    populateList(items, itemsList);
}

// buttons listeners
clearAllbtn.addEventListener('click', clearAll);
checkAllbtn.addEventListener('click', checkAll);
uncheckAllbtn.addEventListener('click', uncheckAll);