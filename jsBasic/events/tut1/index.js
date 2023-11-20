const section = document.querySelector('#boxes');

const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function changeColor() {
    console.log(this)
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}


for (const color of colors) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = color;
    section.append(div)
    div.addEventListener('click', changeColor)
}
