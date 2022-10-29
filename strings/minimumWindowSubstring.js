const s = "ADOBECODEBANC", t = "ABC"

function MWS(s,t){

    let tObj ={};
    let sObj ={};
    let i =0;
    let j = 0;
    let count = 0 ;
    let res = "";

    let tarr = t.split("");
    let sarr = s.split("");
    
    for(let i of tarr){
        if(tObj[i]=== undefined) tObj[i] = 1
        else tObj[i]++
    }
    while(i<s.length){
        while(i<s.length &&count!= tarr.length){
            if(sObj[sarr[i]]===undefined){
                sObj[sarr[i]]=1
                if(tObj[sarr[i]]) count++;
            } 
            else{
                sObj[sarr[i]]++
                if(sObj[sarr[i]]<=tObj[sarr[i]]) count++
            } 
            i++
        }
        while(j < i && count === tarr.length){
            if(i-j<res.length)
                res = s.substring(j,i)
            else if(res.length==0) res = s.substring(j,i)
            sObj[sarr[j]]--
            if(sObj[sarr[j]]<tObj[sarr[j]]) count--;
            j++;
        }
    }
console.log(res);
}
MWS(s,t)