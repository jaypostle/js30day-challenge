const panels = document.querySelectorAll('.panel');

// const toggleOpen = (e) => {
//     e.classList.toggle('open');
//     console.log('toggle open was clicked');

// }

function toggleOpen() {
    this.classList.toggle('open');
    console.log('toggle open was clicked');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// listen for a click on each panel
panels.forEach(panel => panel.addEventListener("click", toggleOpen));

// listen for transition end event
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));


