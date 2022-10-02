const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked;

function handleCheck(e) {
    // check if they have the shift key down
    // and check that they are checking it
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single check box
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('starting to check them inbetween!')
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}