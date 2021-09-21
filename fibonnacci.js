//  'n' is how many fibonnacci numbers you want
function fibonacci (n) {
    if (n==0 || n ==1  || n==2) {
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

fibonacci (5)