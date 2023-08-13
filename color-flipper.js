const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E", "F"];
const btn = document.getElementById('btn');
const text = document.querySelector('.color');
const reset = document.getElementById('reset');
btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor +=hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    text.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

reset.addEventListener('click', function() {
    const white = '#f1f5f8';
    document.body.style.backgroundColor = white;
    text.textContent = white;
});