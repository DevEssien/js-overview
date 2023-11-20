const randInt = (end) => {
    return Math.floor( Math.random() * end );
}

const randrange = (start, end) => {
    return Math.floor( Math.random() * (end - start)) + start
}

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0 ; i--) {
        const randInt = Math.floor(Math.random() * (i + 1));
        [ arr[i], arr[randInt] ] = [arr[randInt], arr[i]]
    }
    return arr
}