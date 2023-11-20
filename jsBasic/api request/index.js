const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     btn.style.position = 'relative'
//     btn.style.left = `${+(btn.style.left.slice(0, -2)) + 100}px`
// })

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)';
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)';
//     }, 2000)
// }, 1000);

// const req1 = new XMLHttpRequest();

// req1.addEventListener('load', function() {
//     const data = JSON.parse(this.responseText);
//     const planets = data.results
//     for (const planet of planets) {
//         console.log('result name ', planet.name)
//     }
// });
// req1.addEventListener('error', () => {
//     console.log('Error occured');
// });
// req1.open('GET', 'https://swapi.dev/api/planets');
// req1.send()

