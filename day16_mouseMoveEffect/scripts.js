const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    
    let { offsetX: x, offsetY: y } = e;
    // "this" will always be the hero but the target could be the h1 or the hero background class
    // console.log(this, e.target);
    if(this !== e.target) {
        // essnetially, if we were to hover over the h1, it might give us a reading of 1, 1 but it's actually in the middle of the screen. So we want to add that value to the actual x and y value that we have created.

        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2)); 
    const yWalk = Math.round((y / height * walk) - (walk / 2)); 

    console.log(xWalk, yWalk);

    // text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7)`;

    

}

hero.addEventListener('mousemove', shadow);