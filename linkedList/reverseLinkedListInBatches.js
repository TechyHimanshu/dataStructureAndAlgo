ip = "1->2->3->4->5->6->7->8"
n = 3
op = "3->2->1->6->5->4->8->7"

class Node{
    constructor(value,next = null){
        this.val= value
        this.next = next
    }

}

class LL {
    constructor(head= null){
        this.head = head
        this.size = 0
    }
    
    inserNode(value,next){
        this.head = new Node(value, next)
        this.size++
        return this.head
    }

    printLL(){
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    reverseInBatch(head, batchsize){
        let current = head
        let k = batchsize
        let previous = new Node()
        let next = new Node()
            while(current && batchsize>0){
                next = current.next
                current.next = previous
                previous= current
                current = next
                batchsize --
            }
            k = batchsize
            if(next!= null){
                this.head.next =  this.reverseInBatch(next, 3)
               
            }
        return previous
    }
}

let ll = new LL()
const a =ll.inserNode(1,null)
const b = ll.inserNode(2,a)
const c = ll.inserNode(3,b)
const d = ll.inserNode(4,c)
const e = ll.inserNode(5,d)
const f = ll.inserNode(6,e)
const g = ll.inserNode(7,f)
const h = ll.inserNode(8,g)
const aa = ll.reverseInBatch(ll.head, 3)
ll.printLL()
