console.log("hello");


const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin    = "round"
ctx.lineCap     = "round";
ctx.lineWidth   = 50;

let isDrawing   = false;
let lastX       = 0;
let lastY       = 0;
let hue         = 0;
let direction   = true;
ctx.globalCompositeOperation = 'multiply';

function draw(e) {
    if (!isDrawing) return; //(don't run when mouse is not clicked down)
    console.log(e);
    // set stroke colour to a programmatic hsl
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // set stroke style differently
    ctx.beginPath();
    // start to
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update last x and y after draw is run
    lastX = e.offsetX;
    lastY = e.offsetY;
    // could also set these two variables in one line like so
    // [lastX, lastY] = [e.offsetX, e.offsetY]; called destructing an array
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // also want to update our last x and last y 
    // as soon as the person clicks their mouse down to start this function, we are updating lastX and lastY with the most up to date offsetx/y
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw); // we only actually draw when we move, not when we click
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);