window.addEventListener('keydown', function(e) {
    // drum noises / audio feedback

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(e.keyCode);

    // console.log(audio);
    if(!audio) return; // stops function
    audio.currentTime = 0;
    audio.play();

    // Web bos class method
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    key.classList.add('playing');
    // transition end event instead of setTimeout
    
    
    // affect visual feedback (Jayson)
    // console.log(key);
    // // change the scale and color
    // // key.style.transform = 'scale(1.1';
    // key.style.border = '0.4rem solid yellow';

    // // then after it's done, go back
    // const revertKeyDisplay = () => {
    //     // key.style.transform = 'scale(0.9)';
    //     key.style.border = '0.4rem solid black';
    // }
    // const setTimer = setTimeout(revertKeyDisplay, 150);
    // setTimer();
    // clearTimeout(setTimer);


    

});


const removeTransition = (e) => {
    // if(e.propertyName !== 'transform') return;
    // console.log(e.propertyName);
    console.log('removeTransition');
    console.log(e);
    e.target.classList.remove('playing');
    // console.log(this);
    // this.classList.remove('playing');
};



const talk = () => {
    console.log('talk was clicked');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => key.addEventListener('click', talk));
console.log(keys);
// keys.forEach(key => key.textContent = 'hello');


    

console.log('hello');