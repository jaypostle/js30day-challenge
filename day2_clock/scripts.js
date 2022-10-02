const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


console.log(secondHand);
function setDate() {
        
        // console.log('hi');

        const now = new Date();

        // Seconds
        const seconds = now.getSeconds();
        // console.log(seconds);

        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        // console.log(seconds);


        // Minutes
        const minutes = now.getMinutes();
        console.log(minutes);
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        // Hours
        const hours = now.getHours();
        console.log(hours);
        const hoursDegrees = ((hours / 24) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);