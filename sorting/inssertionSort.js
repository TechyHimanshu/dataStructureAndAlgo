// insertion sort

const arr2 = [2, 8, 1, 3, 6, 7, 5, 4];
const arr = [8,7,6,5,4,3,2,1];
const insertionSort = arr =>{

    for(let i = 1 ; i<arr.length; i++){
        for (let j = i-1 ; j > -1 ; j--){
            if(arr[j+1]< arr[j])    
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            console.log("After each iteration = " , arr)
            count+= 1;
        }
    }

    console.log(arr);

}

insertionSort(arr);