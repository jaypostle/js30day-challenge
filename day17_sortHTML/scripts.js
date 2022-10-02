const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Array.sort without articles
// console.log(bands);
// bands.sort();
// console.log(bands);

// find the first letter that doesn't use "The An A"

// create a function to remove the articles 

const sortBands = function(firstBand, secondBand) {
    let firstBandTitle = firstBand.toLowerCase(),
        secondBandTitle = secondBand.toLowerCase();
    firstBandTitle = removeArticles(firstBandTitle);
    secondBandTitle = removeArticles(secondBandTitle);

    //  now sort based on your new values
    if (firstBandTitle > secondBandTitle) return 1;
    if (firstBandTitle < secondBandTitle) return -1;
    return 0;

};

// takes a string and if it has more than 1 word, it checks to see if the first word has A THE or AN and removes it
const removeArticles = function(string) {
    incomingWords = string.split(" ");
    if(incomingWords.length <= 1) return string;
    if(incomingWords[0] == 'a' || incomingWords[0] == 'an' || incomingWords[0] == 'the')
        return incomingWords.splice(1).join(" ");
    return string;
}

console.log(bands.sort(sortBands));


// ****** /// alternative way to do it, via Wes Bos // ****** //

function strip(bandName) {
    // replaces a, the, or an with nothing then trims the string
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// insert ^ this function in sortBands() - replace removeArticles() with strip();
// It works!

// or use this smaller function
const sortedBands = bands.sort(function (a, b) {
    if(strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    };

    // this is the same as:
    // return strip(a) > strip(b) ? 1 : -1;
});

console.log(sortedBands);



///// Now build it
document.querySelector('#bands').innerHTML = 
    sortedBands
        .map((bandName) => {
        return `<li>${bandName}</li>`})
        // join is required to remove the commas from the array
   .join('');