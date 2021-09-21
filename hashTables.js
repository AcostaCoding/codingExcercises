// dictionarys in python, maps in java, objects in JS, Ruby hashes.
// you see them in caches. 

// a hash function turns keys into an 'index' (an address in memory) where to store the value
// a hash function turns any input into a fixed length value (ex: sha1, sha256)
// it's one way, can't turn the hash back to the value. but same input, same result (indempontent)

// acces and lookups are very fast. 

class HashTable {
    constructor (size) {
        this.data = new Array(size) 
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length            
        }
        return hash
    }
    set (key,value) {
        let address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value])
        return this.data;
    }
    get(key) {
        const currentBucket = this.data[this._hash(key)]
        if (!currentBucket) {
            return undefined
        }
        for (let i = 0; i < currentBucket.length; i++) {
            if(currentBucket[i][0]==key) {
                return currentBucket[i][1]
            }
        }
    }   


}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000);
myHashTable.get('grapes');

// return first recurrent item from an array

function firstRecurrent (arr) {
    const seen = {};
    for (let index = 0; index < arr.length; index++) {
        if(seen[arr[index]]) {
            return arr[index]
        } else {
        seen[arr[index]] = true    
        }
    }
    return undefined
}

firstRecurrent([2,3,4,5,1,8])