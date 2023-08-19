const ip = "218761765";

function findNext(ip){
    ip = ip.split("");
    let n = ip.length;

    if(n===0) return 0;
    // this gets the index of odd one out 
    for(var i=n-1; i>0; i--){
        if(ip[i-1]<ip[i])
            break;
    }
    
    if(i!=0){
        for(let j = n-1;j>=i;j--){
            if(ip[i-1]<ip[j]){
                temp = ip[j];
                ip[j] = ip[i-1];
                ip[i-1] = temp;
            }
        }
    }
    ip = ip.slice(0,i).concat(ip.slice(i,n).reverse());
    console.log(ip);

}
findNext(ip);

//this solution is not correct refer nexxt permutation