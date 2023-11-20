const annoyer = {
    phrases: ['literally', 'can\'t stop', 'won\'t stop', 'Totes'],
    pickPhrase() {
        const { phrases } = this
        const randInt = Math.floor(Math.random() * phrases.length)
        return phrases[randInt]
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log('PHEW!! JUST STOPPED!!!')
    }
}

//// DOM CODE ////
for (const game of warriorsGames) {
    for (const team in game) {
        const singleTeam = game[`${team}`].team
        const li = document.createElement('li');
        li.innerText = singleTeam;
        ul.appendChild(li)
    }
}

const script = document.querySelector('script');
script.insertAdjacentElement('beforebegin', ul)