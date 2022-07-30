class LNode {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
        this.size=0
    }

    // insert head
    insertHead(data){
        this.head = new LNode(data,this.head);
        this.size++;
    }
    
    // print linked list
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }

    //insert at the last
    insertLast(data){
        const node = new LNode(data)
        let current = this.head;
        while(current.next){  // this will iterate till next is not null
            current = current.next;
        }
        current.next = node;
        this.size++
    }

    // insert at index
    insertAt(data,index){
        const newNode = new LNode(data)
        let current = this.head;
        let previous;
        let count = 0;

        while(count < index){
            previous = current;
            current = current.next;
            count++
            if(current===null && count < index){
                console.log("invalid index for ",index)
                return
            }
        }
        previous.next = newNode;
        newNode.next =current;
        this.size++;
    }
}
const ll = new LinkedList()
ll.insertHead("start");
ll.insertLast("last")
ll.insertAt(1,1)
ll.insertAt(2,2)
ll.insertAt(3,8)
ll.print()
console.log(ll);
