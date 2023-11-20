function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
const coinCount = document.querySelector('#coin-count');

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.left = `${x}px`;
	coin.style.top = `${y}px`
	return coin
}
moveCoin()

const extractPos = (pos) => {
	if (!pos) return 100;
	return +pos.slice(0, -2);
}

const move = {
	down(element, amount ) {
		const currentTop = extractPos(element.style.top);
		element.style.top = `${currentTop + amount}px`        //get the current value of top, convert to number removing px and an amount to it 

	},

	left(element, amount) {
		element.style.transform = 'scale(-1, 1)'
		const currentLeft = extractPos(element.style.left);
		element.style.left = `${currentLeft - amount}px`

	},

	up(element, amount) {
		const currentTop = extractPos(element.style.top);
		element.style.top = `${currentTop - amount}px`  

	},

	right(element, amount) {
		element.style.transform = 'scale(1, 1)'
		const currentLeft = extractPos(element.style.left);
		element.style.left = `${currentLeft + amount}px`

	},
}

window.addEventListener('keyup', function(e) {
	if (e.key === 'ArrowDown') move.down(avatar, 50)

	else if (e.key === 'ArrowLeft') move.left(avatar, 50)

	else if (e.key === 'ArrowUp') move.up(avatar, 50)

	else if(e.key === 'ArrowRight') move.right(avatar, 50)
	
	if (isTouching(avatar, coin)){ 
		moveCoin();
		coinCount.innerText = `${+coinCount.innerText + 1}`
	};

});



