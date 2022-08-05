// merge sort is based o devide and conqure method and worst case time complexity is O(nlogn)

const arr = [2, 8, 1, 3, 6, 7, 5, 4];

const conqure = (arr, startIdx, midIdx, endIdx) => {
    let tempArr = Array(endIdx - startIdx + 1);

    let i = startIdx;  // tracking first array
    let j = midIdx + 1; // tracking second array
    let n = 0;  // tackig temp array

    while (i <= midIdx && j <= endIdx) {
        if (arr[i] <= arr[j]) {
            tempArr[n] = arr[i];
            n++;
            i++;
        }
        else {
            tempArr[n] = arr[j];
            n++;
            j++;
        }
    }

    while(i<=midIdx){
        tempArr[n] = arr[i]
        n++;
        i++
    }

    while(j<=endIdx){
        tempArr[n] = arr[j]
        n++;
        j++
    }

    for(let i = 0, j = startIdx; i<tempArr.length; i++,j++ ){
        arr[j] = tempArr[i];
    }

}

const devide = (arr, startIdx, endIdx) => {

    if(startIdx>=endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    devide(arr, startIdx, midIdx);
    devide(arr, midIdx + 1, endIdx);
    conqure(arr, startIdx, midIdx, endIdx);

}

const mergeSort = arr => {
    const arrlen = arr.length;
    devide(arr, 0, arrlen - 1);
    console.log(arr)
}

mergeSort(arr);