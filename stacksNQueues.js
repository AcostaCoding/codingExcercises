    // implement a queue using stacks
    class Stack {
        constructor () {
            this.first = null,
            this.last = null,
            this.length = 0
        }
        push (value) {
            const newNode = {
                value: value,
                next : null
            }
            if(!this.length) {
                this.first = newNode;
                this.last = newNode;
            } else {
                const holdingPointer = this.first;
                this.first = newNode;
                newNode.next = holdingPointer;
            }
            this.length++;
            return this
        }
        pop () {
            this.first = this.first.next;
            this.length--
        }
        peek() {
            return this.first;
        }
    }

    const myStack = new Stack ();

    myStack.push('ale');
    myStack.push('sofi');
    myStack.push('gaspar');


    // in a queue, we have FIFO dinamic. 

    class Queue extends Stack {
        enqueue (value) {
            const newNode = {
                value: value,
                next: null
            }
            if(!this.length) {
                this.first = newNode;
                this.last = newNode;
            }
            const holdingPointer = this.last;
            this.last = newNode;
            holdingPointer.next = newNode;
            this.length++
            return this
        }
        dequeue () {
            this.first = this.first.next;
            this.length--;
            return this
        }
    }

    const myQueue = new Queue ();

    myQueue.enqueue('aleee');
    myQueue.enqueue('Sofiiii');
    myQueue.enqueue('Gaspi')
    myQueue.dequeue;
