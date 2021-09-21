class myArray {
    constructor () {
        this.length = 0,
        this.data = {}
    }
    // getter method
    get (index) {
        return this.data[index]
    }
    // push method
    push (item){
        this.data[this.length] = item;
        this.length++;
        return this.data[this.lenght] 
    }
    // pop method
    pop () {
        const toErase = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return "erased item: " + toErase;
    }
    // delete method
    delete (index) {
        const toErase = this.data[index];
        delete this.data[index];
        this.unshift(index);
        this.length--;
        return "erased item: " + toErase
    }
    unshift (index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
            delete this.data[this.length-1]
        }
    }
}

// Example 

const arr1 = new myArray

arr1.push('orange');
arr1.push('grapes');
arr1.push('melon');
arr1.push('bananas');
arr1.pop ();
arr1.delete(1)

