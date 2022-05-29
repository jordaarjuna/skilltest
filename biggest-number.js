/*

Description:
Create a function that takes one positive three digit integer and rearranges
its digits to get the maximum possible number. Assume that the argument is an integer.


Returm null if the argument is invalid.

maxRedigit(123) --> 321
maxRedigit(231) --> 321
maxRedigit(321) --> 321

maxRedigit(-1)  --> null 
maxRedigit(0)   --> null
maxRedigit(99)  --> null
maxRedigit(1000) --> null

*/

function maxRedigit(input) {
    // jika tipe data input bukan number atau
    // jika input lebih kecil dari 100 atau
    // jika input lebih besar dari 999
    // return null
    if (typeof input != "number" || (input < 100 || input > 999)) {
        return null;
    }

    // ubah input menjadi string
    // lalu pisahkan setiap karakter
    // menjadi array dan simpan kedalam variable chars
    let chars = input.toString().split("");

    // lalu sortir setiap element
    // pada array chars dengan urutan menaik
    chars = chars.sort((a, b) => b - a);

    // gabungkan kembali setiap karakter
    // lalu konversi menjadi integer / number
    const output = parseInt(chars.join(""));

    // kembalikan angka yang sudah disusun ulang.
    // selesai.
    return output;
}

console.log(maxRedigit(123));  // --> 321
console.log(maxRedigit(231));  // --> 321
console.log(maxRedigit(321));  // --> 321

console.log(maxRedigit(-1));   // --> null 
console.log(maxRedigit(0));    // --> null
console.log(maxRedigit(99));   // --> null
console.log(maxRedigit(1000)); // --> null