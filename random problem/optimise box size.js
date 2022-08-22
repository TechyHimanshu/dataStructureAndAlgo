arr = [3, 7, 5, 6, 2];


function sumA(arr, maxSumEle) {
    let sum = 0
    for (let i of maxSumEle) {
        sum = sum + i;
    }
    maxSumA = sum
    for (let i of arr) {
        if (maxSumEle.has(i)) continue;
            maxSumA = sum+i
            maxSumEle.add(i);
            break;
        }
    return maxSumA;
    }
function minimalHeaviestSetA(arr) {
    // Write your code here
    const sizeA = Math.ceil((arr.length / 2) - 1);
    const arr2 = arr.sort((a, b) => b - a);
    let maxSumEle = new Set()
    maxSumEle.add(arr[0]);
    
    let finalop = [];
    let i = 0;
    while (i <= sizeA) {
        let sumB = 0
        const aSum = sumA(arr2, maxSumEle);
        for (let i of arr2) {
            if (maxSumEle.has(i)) continue;
            sumB = sumB + i
        }
        if (aSum > sumB)
            break;
    }
    for (let i of maxSumEle) {
        finalop.push(i);
    }

    console.log(finalop);

}


minimalHeaviestSetA(arr);
