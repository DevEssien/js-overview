class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

function checkBST(root){
    const a = [3,5,7,9,11,13]
    for (let i = 0; i < a.length  -1 ; i++) {
        if (a[i] < a[i + 1]) {
            console.log( 'yes ', a[i], a[i + 1])
            continue
        } else {
            console.log('No', a[i], a[i + 1])
            return false
        }
    }
    return true

}
const isBST = checkBST();
console.log(isBST? 'Yes': 'No')