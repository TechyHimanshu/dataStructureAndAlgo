class Node{
    constructor(data){
        this.data = data
        this. next = null
        this.buttom = null
    }
}

let head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(19);
head.next.next.next = new Node(28);

head.buttom = new Node(7);
head.buttom.buttom = new Node(8);
head.buttom.buttom.buttom = new Node(30);

head.next.buttom = new Node(20);

head.next.next.buttom = new Node(22);
head.next.next.buttom.buttom = new Node(50);

head.next.next.next.buttom = new Node(35);
head.next.next.next.buttom.buttom = new Node(40);
head.next.next.next.buttom.buttom.buttom = new Node(45);

function mergeList(l1,l2){
    if(!l1) return l2
    if(!l2) return l1

    let merged = null
    
    if(l1.data<= l2.data){
        merged = l1
        merged.buttom = mergeList(l1.buttom,l2)
    }else{
        merged = l2
        merged.buttom = mergeList(l1,l2.butom)
    }

    return merged
}
function flatten(head){
    if(!head || head.next === null){
        return head
    }

    head.next = flatten(head.next)
    head = mergeList(head, head.next)
    return head
}

console.log(flatten(head))