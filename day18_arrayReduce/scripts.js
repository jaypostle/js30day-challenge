// then turn it from a nodelist to an array
// we could spread it into a new array or run array.from

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));


const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        console.log(mins, secs);
    })
    // reduce takes in an array and returns anything you want
    // take all the numbers and reduce them into one big number

    // The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.
    // total is the previousValue and vidSeconds is the currentValue
    .reduce((total, vidSeconds) => total + vidSeconds);
    console.log(seconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    
    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
    console.log(hours, mins, secondsLeft);

