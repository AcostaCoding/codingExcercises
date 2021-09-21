class LinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1
    }
    append (value) {
        const newNode = {
            value : value,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        
    }
    prepend (value) {
        const newNode = {
            value : value,
            next : this.head
        }
        this.head = newNode;
        this.length++
    }
    insert(value, index) {

        if(index>=this.length) {
            return this.append(value);
        }

        const newNode  = {
            value : value,
            next : null
        }
        let i = 0
        // find object at index
        let currentNode = this.head.next;
        let prevNode = this.head;

        while (i<index-1) {
            prevNode = prevNode.next;
            currentNode = currentNode.next;
            i++;
        }
        newNode.next = currentNode;
        prevNode.next = newNode;
        this.length++;
        return this
    }
    printList () {
        const values = [];
        let currentNode = this.head;
        while (currentNode.next!==null) {
            values.push(currentNode.value);
            currentNode = currentNode.next
        }
        return values
    }
    // reverse () {
    //     let currentNode = this.tail;
    //     let prevNode = this.head;

    //     while (currentNode.next !== this.head) {
    //         prevNode = prevNode.next;
    //         if(prevNode.next ==currentNode) {
    //             currentNode.next = prevNode;
    //             currentNode = prevNode
    //         }        
    //     }
    // }
}

const myLinkedList  = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(20);
myLinkedList.insert(55,2);
// myLinkedList.reverse();
myLinkedList.printList();

// Doubly linked list

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1
    }
    append (value) {
        const newNode = {
            value : value,
            next : null,
            prev : this.tail
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        
    }
    prepend (value) {
        const newNode = {
            value : value,
            next : this.head,
            prev : null
        }
        this.head.prev = newNode
        this.head = newNode;
        this.length++
    }
    insert(value, index) {

        if(index>=this.length) {
            return this.append(value);
        }

        const newNode  = {
            value : value,
            next : null
        }
        let i = 0
        // find object at index
        let currentNode = this.head.next;
        let prevNode = this.head;

        while (i<index-1) {
            prevNode = prevNode.next;
            currentNode = currentNode.next;
            i++;
        }
        newNode.next = currentNode;
        currentNode.prev = newNode;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        this.length++;
        return this
    }
}

const myLinkedList  = new DoublyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(232,2)