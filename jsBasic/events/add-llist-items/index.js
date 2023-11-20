const input = document.querySelector('input[id=items]');

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value) {
        const ul = document.querySelector('.cart');
        const li = document.createElement('li');
        li.innerText = this.value;
        ul.appendChild(li)
        this.value = ''
    }
})