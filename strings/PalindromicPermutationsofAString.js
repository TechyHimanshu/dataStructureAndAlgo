const str ="ababababa"
function palindromicPermuteHelper(currPos,totalPos,obj,odd,rsf){
    if(currPos===totalPos){
        let iRes = rsf;
        let rev = "";
        rev = rsf.split("").reverse().join("")
        if(odd.length>1){
            iRes +=odd
        }
        iRes +=rev
        console.log(iRes);  
        return;
    }
for(let [key,value] of Object.entries(obj)){
    let freq = value;
    if(value>0){
        obj[key] = value-1;
        palindromicPermuteHelper(currPos+1,totalPos,obj,odd,rsf+key)
        obj[key] = freq;
    }
   
}
// console.log(rsf);
}

function palindromicPermutation(str){
let obj ={};
let strLen = str.length-1;
while(strLen){
    if(obj[str[strLen]]=== undefined) obj[str[strLen]]=1
    else obj[str[strLen]]++
    strLen--;
}
let oddChar = "";
let len=0;
for(let [key,value] of Object.entries(obj)){
    if(value%2===1) oddChar = oddChar+key;
    obj[key] = Math.floor(value/2)
    len = len+Math.floor(value/2)
}
console.log(obj);
palindromicPermuteHelper(0,len,obj,oddChar,"")
}

palindromicPermutation(str)