// linear search

function linear() {
    let arr = [44, 67, 887, 5, 33, 456, 78, 876, 54, 33, 2, 34]
    let ele = 67
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i
        }
    }
}
console.log(linear(), "index");