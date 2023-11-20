const twoSums = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === target) {
                return [i, j]
            }
        }
    }
}

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// const addTwoNum = () => {
//     const arr1 = [2,4,3];
//     const arr2 = [5,6,4];
//     const arrNum1 = +arr1.join('');
//     console.log(arrNum1, typeof arrNum1)
//     const arrNum2 = +arr2.join('');
//     const arrSum = (arrNum1 + arrNum2).toString();
//     const reversedSum = arrSum.split('').reverse()
//     return reversedSum.map(n => +n)
// }

const addTwoNum = () => {
    const linkedList = []
    const l1 = [0];
    const l2 = [0];
    const loopArr = (arr) => {
        let arrStr = ''
        for (let i = arr.length - 1; i >= 0; i--) {
            arrStr += `${arr[i]}`
        }
        return arrStr
    }
    const arrNum1 = +loopArr(l1);
    const arrNum2 = +loopArr(l2);
    const arrSum = `${arrNum1 + arrNum2}`;
    for (let i = arrSum.length - 1; i >= 0; i--) {
        linkedList.push(Number(`${arrSum[i]}`))
    }
    return linkedList
}
console.log(addTwoNum())