/*

Alternate each case of each of string given 

alternateCase("abc")            => "ABC"
alternateCase("ABC")            => "abc"
alternateCase("Hello World")    => "hELLO wORLD"

*/

function alternateCase(input) {
    // pisahkan setiap karakter pada input
    // menjadi array dan simpan kedalam variable chars
    const chars = input.split("");

    let output = "";

    chars.forEach(char => {
        // check apakah char uppercase?
        // jika ya maka ubah jadi lowercase
        // begitupun sebaliknya.
        if (char == char.toUpperCase()) {
            output += char.toLowerCase();
        } else {
            output += char.toUpperCase();
        }
    });

    // selesai.
    return output;
}

console.log(alternateCase("abc")); // => "ABC"
console.log(alternateCase("ABC")); // => "abc"
console.log(alternateCase("Hello World")); // => "hELLO wORLD"