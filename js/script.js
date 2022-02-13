const colors = ['#495371', '#398AB9', '#FF5C8D', '#CDB699', '#8A39E1', '#2EB086', '#FF6464', '#FAEEE7'];

const myBtn = document.getElementById('btn');
const color = document.getElementById('color');

myBtn.addEventListener("click", function() {
    //Get random number between 0-3

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


// random number function

function getRandomNumber() {
    let theColor =  Math.floor(Math.random() * colors.length);
    console.log(theColor);
    return theColor;
}


console.log(getRandomNumber());