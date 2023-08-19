class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    push(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    mergeSort(head){
        if(!head || !head.next){
            return head
        }
        let middle = this.findMiddle(head)
        let nextToMiddle = middle.next

        middle.next = null
        let right = this.mergeSort(head)
        let left = this.mergeSort(nextToMiddle)
        let sortedList = this.merge(left, right)

        return sortedList
    }
    findMiddle(head){
        if(!head){
            return head
        }
        let slow = head
        let fast = head

        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    merge(left,right){
        let dummy = new Node(0)
        let temp = dummy
        while(left && right){
            if(left.data <= right.data){
                temp.next = left
                left = left.next
            }
            else{
                temp.next = right
                right = right.next
            }
            temp = temp.next    
        }
  

        temp.next = left?left:right
        return dummy.next
    }
  
    printList() {
      let current = this.head;
      while (current) {
        process.stdout.write(`${current.data} -> `);
        current = current.next;
      }
      process.stdout.write("null");
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.push(10);
  linkedList.push(7);
  linkedList.push(3);
  linkedList.push(8);
  linkedList.push(5);
  linkedList.push(2);
  
  console.log("Original Linked List:");
  linkedList.printList();
  
  const sortedList = linkedList.mergeSort(linkedList.head);
  
  console.log("\nSorted Linked List:");
  linkedList.printList();
  