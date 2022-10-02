const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    // Interpolated

    let adj = 'poor';
console.log('Hello I am a %s string!', 'great');
console.log(`Hello I am a ${adj} string!`);    
// Styled

// console.log('%c I am some great text', 'font-size: 24px');
    // warning!
console.warn("OH NOOOO!");

    // Error :|
console.error("Shit!");
    // Info
console.info('Fun fact crocs eat 3-4 people per year');
    // Testing
    // only runs if the first argument is false
    console.assert(1 === 1, 'That is wrong!');

    // clearing
// console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
console.log(p);
console.dir(p);

    // Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`They are ${dog.age}`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`)

})
    // counting
console.count('Wes');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/webbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data);
        });