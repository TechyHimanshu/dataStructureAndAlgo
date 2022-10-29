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
        this.head = new LNode(data);
        this.size++;
        return this.head;
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
    
    findMiddleElement(){
        let mid;
        let midCount=0;
        let count = 0 ;
        let previous;
        let current = this.head;
        while(current.next){
            previous = current
            current = current.next
            count+=1
            if(count%2 != 0){
                if(!mid){
                    mid = new LinkedList();
                    mid.insertHead(previous.data)
                    midCount++
                }
                else {
                    mid.insertAt(previous.data,midCount)
                    midCount++;
                }
            }
        }
        let c2 = mid.head;
        while(c2.next){
            c2 =c2.next 
        }
        console.log(c2.data);
    }

    findMiddleElement2(){
        let mid = this.head;
        let current = this.head;

        if(this.head != null) {

            while(current !==null && current.next !==null){
                mid= mid.next;
                current= current.next.next;
            }
            console.log(mid.data)
        }
        console.log("-1");
    }

    reverse(){
        let current = this.head;
        let previous = null;

        while(current != null){
            let temp = current.next; 
            current.next = previous;
            previous = current;
            current = temp;
        }
    }

}
const ll = new LinkedList()
ll.insertHead("start");
ll.insertAt(1,1)
ll.insertAt(2,2)
ll.insertAt(3,3)
ll.insertLast("last")
ll.findMiddleElement();
ll.findMiddleElement2();
ll.reverse()
ll.print()
console.log(ll);