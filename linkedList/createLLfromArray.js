
//start creating ll (2,{1,{1,null}})
// so in this case head will be last element and last element will be 1st elemet of arr 
const arr = [ 1, 1, 2, 3, 4, 4 ]
function linkedList(arr){
    return arr.reduce((next, val) => ({val, next}), null);
  }
console.log(linkedList(arr));


// if want last ele of arr to be the last ele of ll the use reduce right

function ll2(arr){
    return arr.reduceRight((next,val) =>({val,next}),null);
}

console.log(ll2(arr));

class LinkList {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

let ll;
let head;
let i = 0;
while(i<arr.length){
    if(!ll){
        ll = new LinkList(arr[i]);
        head = ll;
    }
    else{
        head.next = new LinkList(arr[i]);
        head = head.next;
    }
    i++
}
console.log(ll);

