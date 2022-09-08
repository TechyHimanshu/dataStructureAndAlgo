const ip = [9,9,8,6,2,9,0,2,9,1];// - pick 1st unique number

function firstUniqueNo(ip){
    let obj ={};
    for(let i =0; i<ip.length; i++){
        if(obj[ip[i]]=== undefined) obj[ip[i]]={idx:i,isDuplicate:false}
        else obj[ip[i]].isDuplicate = true;
    }
    let minIdx = ip.length;
    let uiqueEle; 
    for(let i in obj){
        if(obj[i].isDuplicate) continue;
        let value = obj[i]
        if(value.idx<minIdx)
            minIdx = value.idx;
            uiqueEle = i;

    }
    console.log(uiqueEle);
}

firstUniqueNo2(ip);


// using Maps it store the order of input to the map
function firstUniqueNo2(){
    let mapObj = new Map();
    for(let [i,val] of ip.entries()){
        if(mapObj.get(val)=== undefined) mapObj.set(val,false)
        else mapObj.set(val,true)
    }

    for(let [key, value] of mapObj){
            if(value) continue;
            return key;
        }
}
console.log(firstUniqueNo2(ip));
