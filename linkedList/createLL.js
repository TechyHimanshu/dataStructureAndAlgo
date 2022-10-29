class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LL{
    constructor(head = null){
        this.head = head;
        this.size = 0;
    }

    insertNode(data){
        let node = new Node(data);
        this.size++
        return node;
    }

    printLL(head){
        while(head){
            console.log(head.data);
            head = head.next;
        }
    }

}


let arr = [2,2,4,5]
let arr2 = [4,6,-10,8,9,10,-19,10,-18,20,25]
function llfA(arr){
    var head;
    let current;
    let ll =  new LL();
    for(let i of arr){
        if(!head) {
            head = ll.insertNode(i);
            current = head;
        }
        else{
        
            current.next= ll.insertNode(i);
            current = current.next;
        }  
    }
    ll.printLL(head);
    let set = new Set();
    let temp = head
    let prev;
    while(temp){
        if(!set.has(temp.data)){
            prev = temp;
            set.add(temp.data);
        }
        else{
            let xyz = prev
            prev = temp
            xyz.next= prev.next;
            temp = temp.next;
        }
    }
    ll.printLL(head);
    
}

llfA(arr)
 