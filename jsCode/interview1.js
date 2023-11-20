const input = { a: 1, b: 2, c: 3 };

const toArray  = (object) => {
    const output = []
    if (Object.keys(object).length > 0) {
        for (const key in object) {
            output.push({[key]: object[key]})
        }
    }
    return output
}

toArray(input)