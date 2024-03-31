function primenumbers(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function filter(arr) {
    return arr.filter(num => primenumbers(num));
}

// Test the function
const numbers = [21, 22, 23, 24, 26, 27, 28, 57, 53, 60,71,72];
const primes = filter(numbers);
console.log(primes); // Output: [23, 53, 71]
