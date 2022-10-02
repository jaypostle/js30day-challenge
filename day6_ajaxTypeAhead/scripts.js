const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetching the endpoint returns to us a Promise, fetch is a browser api to get data

// first we need to convert the blob of data into json. The blob actually has a prebuilt method to do this.
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// function takes in the word variable that is typed in the field along with the cities array
function findMatches(wordToMatch, cities) {
    // filter the array by the word
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        // g means global and i means case insensitive
        const regex = new RegExp(wordToMatch, 'gi');
        // search either the city or state
        return place.city.match(regex) || place.state.match(regex);
    })
}

// auto function to add commas to numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

// create display function, whenever someone changes the value of the search
function displayMatches() {
    const matchArray = findMatches(this.value, cities);

    // map through the filtered array and make LIs for the place name, state name, and population
    const html = matchArray.map(place => {
        // before we return, lets match the city name with the the search term and replace it so we can highlight it
        // this.value is what the person searched for, search for it globally and insensitive
        const regex = new RegExp(this.value, 'gi');
        // finds what it matched with the regex above and replaces it with a span with a class of highlight
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;

        // the map will return an array so we need to call join to make it a single string
    }).join('');
    // change the innerHTML of the suggestions UL to html variable above
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// event listeners
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);