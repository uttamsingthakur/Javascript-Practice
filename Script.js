const changeColor = (newColor) => {
    const element = document.getElementById('message');
    element.style.color = newColor;
}

let div = document.getElementById('btn');

div.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        case 'btnRed':
            changeColor('red');
            break;
        case 'btnGreen':
            changeColor('green  ');
            break;
        case 'btnBlue':
            changeColor('blue');
            break;
    }
});