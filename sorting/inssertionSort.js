// insertion sort

// it will sort the array and place the element into its correct position
// here i will always start with 1st position and 
//j will will start with one position before i and
// continue comparision by increamenting i and decrementing j

const arr2 = [2, 8, 1, 3, 6, 7, 5, 4];
const arr = [8,7,6,5,4,3,2,1];
const insertionSort = arr =>{

    for(let i = 1 ; i<arr.length; i++){
        for (let j = i-1 ; j > -1 ; j--){
            if(arr[j+1]< arr[j])    
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            console.log("After each iteration = " , arr)
        }
    }

    console.log(arr);

}

insertionSort(arr);