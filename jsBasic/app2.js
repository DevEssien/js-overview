const btn = document.querySelector('button');
btn.addEventListener('click', setTimeout(() => {
    alert('AARGH!! Go Away!!')
}, 5000) );

obj.addEventListener('mouseover', () => {
    obj.innerText = 'changing ...'
    return obj
});