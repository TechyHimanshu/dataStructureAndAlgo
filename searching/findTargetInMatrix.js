var searchMatrix = function(matrix, target) {
    for(let i of matrix){
        let first = i[0]
        let last = i[i.length-1]
        if(target < first || target > last){
            continue
        }
        else{
            let left = 0
            let right = i.length-1
            while(left<=right){
                let mid = Math.floor((left+right)/2)
                if(i[mid]=== target) return true
                else if(i[mid]>target) right = mid -1
                else left = mid+1 
            }
        }
    }
    return false
}


var searchMatrix2 = function (matrix, target) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    let [left, right] = [0, rows * cols - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const [row, col] = [Math.floor(mid / cols), mid % cols];
        const guess = matrix[row][col];

        const isTarget = guess === target;
        if (isTarget) return true;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return false;
};
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 3
searchMatrix2(matrix,target)