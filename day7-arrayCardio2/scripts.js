console.log('jayson hello');

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// const today = new Date();
// const year = today.getFullYear();
// const factor = (person) => year - person.year > 19;

const isAdult = people.some(person => {
    currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});

console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?

const allOlder = people.every((person) => {
    currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});

console.log(allOlder);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const find = comments.find(message => message.id === 823423);

console.log(find);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423 

const findIndex = comments.findIndex(message => message.id === 823423);

console.log(findIndex);

comments.splice(findIndex, 1);

console.table(comments);