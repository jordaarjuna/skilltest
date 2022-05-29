/*

Create solution function that accept 1 parameter that be will multiple number 3 and 5 
while each result of that multiplication is still lower than parameter inputed

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18

*/

function solution(input) {
    let output = 0;
     
    for (let i = 1; i < input; i++) {
        // jika i habis dibagi atau
        // kelipatan dari 3 / 5
        // tambahkan nilai i dengan nilai output
        if (i % 3 == 0 || i % 5 == 0) {
            output += i;
        }
    }
    
    // selesai.
    return output;
}

// console.assert(solution(10) == 23);
// console.assert(solution(20) == 78);

console.log(solution(10)); // => 23 = 3 + 5 + 6 + 9
console.log(solution(20)); // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18