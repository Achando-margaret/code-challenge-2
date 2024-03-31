function changecase(str) {
    let swappedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase();
        } else {
            swappedStr += char.toUpperCase();
        }
    }
    return swappedStr;
}

// Test the function
let input = 'The Quick Brown Fox';
let output = changecase(input);
console.log(output); // Output: "tHE qUICK bROWN fOX"
