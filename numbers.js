 function newarray(first, end) {
 const betweennumbers = [];
const steps = first <= end ? 1 :-1;

for (let i = first; i !== end + steps; i += steps ) {
    betweennumbers.push(i);
}
 return betweennumbers
 }
 // Test
console.log(newarray (4, 7)); // returns [4, 5, 6, 7 ]
console.log(newarray(-4, 7)); // returns [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]