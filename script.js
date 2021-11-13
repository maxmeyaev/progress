const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); //returns the first element within the doc that matches the selector
//node list
let counter = 1; //Our steps start from pos 1;

next.addEventListener('click', () => {
    counter++; //increment the counter
    if(counter > circles.length){
        counter = circles.length;
    }
    update();
})
prev.addEventListener('click', () => {
    counter--;
    if(counter < 1){
        counter = 1;
    }
    update();
})
function update() {
    circles.forEach((circle, index) => {
        if(index < counter){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(counter === 1){ //if the counter is at the beginning then no prev button
        prev.disabled = true;
    } else if(counter === circles.length){ //if the counter is at the end then we can't click next
        next.disabled = true;
    } else { //otherwise prev and next buttons enabled.
        prev.disabled = false;
        next.disabled = false;
    }
}