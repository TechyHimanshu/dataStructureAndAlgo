class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DoublyLL{
    constructor(){
        this.head = null
        this.tail = null
    }

    addNode(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode 
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    craeteDLFromArray(arr){
        if(!arr.length){
            return null
        }
        for(let i=0; i<arr.length; i++){
            let newNode = new Node(arr[i])
            if(!this.head){
                this.head = newNode
                this.tail = newNode
            }else{
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            }
        }
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr= curr.next
        }
    }
}


const dl = new DoublyLL()
// dl.addNode(2)
// dl.addNode(4)
// dl.addNode(1)
// dl.addNode(5)
// dl.addNode(6)
dl.craeteDLFromArray([1,2,3,4,5,6])
dl.print()