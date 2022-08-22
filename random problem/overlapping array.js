arr = [[1200,1700], [1130, 1730], [1930, 2130], [1445, 1545]]

const maxAvaliability = (arr) => {

    arr.sort((a,b)=>a[0]-b[0]);
    const result = [];
    result.push(arr[0]);

    for( let i = 1; i<arr.length; i++){
        let prevELe = result[result.length - 1][1];
        let currEle = arr[i][0];

        if(currEle <= prevELe){
            result[result.length - 1][1] = Math.max(result[result.length - 1][1] , arr[i][1]);
        }
        else result.push(arr[i])
    }

    console.log(result);

}


maxAvaliability(arr);
