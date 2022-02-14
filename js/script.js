
const colors = ['#495371', '#398AB9', '#FF5C8D', '#CDB699', '#8A39E1', '#2EB086', '#FF6464', '#FAEEE7'];
const getBtn = document.getElementById('myBtn');
const getColor = document.getElementById('getColor');
const getBody = document.body;

getBtn.addEventListener ("click", function() {
    let theRandomNumber = getRandomNumber();
    getBody.style.backgroundColor = colors[theRandomNumber];
    getColor.textContent = colors[theRandomNumber]
})

function getRandomNumber() {
    let randomColor = Math.floor( Math.random() * colors.length);
    console.log(randomColor);
    return randomColor;
}

getRandomNumber()