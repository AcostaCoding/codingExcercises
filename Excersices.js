    function reverseString(str) {
        const arrStr = String(str).split('');
        return arrStr.reverse().join('');    
    }
    reverseString('Hola soy Ale');

    // return an array merged and sorted

    function mergeArrays(arr1,arr2){
        const merged = [];
        const i=0;
        const j=0

        // check input

        if (arr1.length ==0) {
            return arr2;
        }
        if(arr2.length ==0) {
            return arr1;
        }
        while (Boolean(arr1[i]) || Boolean(arr2[j])) {
            if (arr1[i] > arr2[j]) {
                merged.push(arr1[i])
                i++
            } else {
                merged.push(arr2[j])
                j++
            }
        }
        return merged;
    }

    mergeArrays([0,5,6,10], [3,4,9,18])

    
    