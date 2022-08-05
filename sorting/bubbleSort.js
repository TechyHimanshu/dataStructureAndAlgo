// bubble sort is the sorting algo in which it will compare 2 adjacent element
//and sort it if required and in 1st pass it will place the largest elememt at the end of the arr

const arr =  [2, 8, 1, 3, 6, 7, 5, 4];
let count = 1;
const bubbleSort = arr =>{

    for(let i = 0 ; i < arr.length; i++ ){
        for(let j = 0; j < arr.length-i-1; j++){
            if (arr[j+1]<arr[j])
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            console.log(arr);
            count +=1;
        }
    }
console.log(arr);
console.log(count);
}

bubbleSort(arr);