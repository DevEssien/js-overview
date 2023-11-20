function spaceDel(sentence) {
    let newString = ''
    for (const letter of sentence) {
        if (letter !== ' ') {
            newString += letter.toLowerCase()
        }
    }
    return newString
}

const isPangram = (sentence) => {
    //not a perfect code
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for (const letter of alphabets) {
        const lowerCaseLetter = letter.toLowerCase()
        if (sentence.indexOf(lowerCaseLetter) === -1) {
            return false
        }
    }
    return true
}


//counting votes
const votes = ['y', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'y', 'y', 'n', 'n', 'n', 'y', 'n', 'y']
votes.reduce((acc, cv) => { 
    if (acc[cv]) {
        acc[cv]++
    } else {
         acc[cv] = 1
    }
    return acc
}, {});

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