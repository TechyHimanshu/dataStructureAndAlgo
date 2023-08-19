const arr = [12,16,99,41,28,21];
// op=[12,21,41,16,28,99]


function sortedEleSum(arr){
    let obj ={};
    let op = [];
    
    for(let i of arr){
        let temp = i
        let sum = 0;
        while(temp>0){
            sum = sum + temp%10;
            temp = Math.floor(temp/10);
        }
        if(obj[sum] === undefined) obj[sum]= [i]
        else obj[sum].push(i)
    }
    console.log(obj);
    let temp2 =  Object.keys(obj).sort((a,b)=>a-b);
    console.log(temp2);
    for(let j of temp2){
        op.push(...obj[j]);
    }
    console.log(op);
}

sortedEleSum(arr);