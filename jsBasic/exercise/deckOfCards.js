
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits  : ['hearts', 'spades', 'diamonds', 'clubs'],
        values : '2,3,4,5,6,7,8,9,10,J,Q,K,A'.split(','),
    
        initialize() {
            const {suits, values, deck} = this
            for (const suit of suits) {
                for (const value of values) {
                    deck.push({value, suit})
                }
            }
        }, 
        shuffle() {
            const { deck } = this
            for (let i = deck.length - 1; i > 0 ; i--) {
                const randInt = Math.floor(Math.random() * (i + 1));
                [ deck[i], deck[randInt] ] = [deck[randInt], deck[i]]
            }
        },
        drawCard() {
            const { deck, drawnCards} = this;
            const card = deck.pop()
            drawnCards.push(card)
            return card
        },
        drawMultiple(num) {
            const cards = []
            for (let i = 0; i < num; i++) {
                cards.push(this.drawCard())
            }
            return cards
        }
    }
}


