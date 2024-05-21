//select the elements on the page.
const canvas = document.querySelector 
('#etch-a-sketch');
const ctx = canvas.getContext('2d');
 const shakebutton = document.querySelector('.shake');
//set up our canva for drawing
const { width,height } = canvas;

const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
//start drawing
ctx.beginpath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

//write a draw function 

//write handler for keys 
function handleKey() {

}
//clear function

//listen for arrow keys
window.addEventListener('keydown', handleKey);
