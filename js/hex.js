const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'D', 'F',];
const color = document.getElementById('color');
const btn = document.getElementById('btn');
const bodyColor = document.body;

btn.addEventListener("click", function(){
    let getHex = '#';

    for(let i = 0; i < 6; i++){
        getHex += hex[getRandom()]
    }

    color.textContent = getHex;
    bodyColor.style.backgroundColor = getHex;

})

function getRandom(params) {
    return Math.floor(Math.random() * hex.length)
}