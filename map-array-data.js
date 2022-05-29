/*

Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] 
is equal to The Product of all the elements of Arr[] except Arr[i].

productArray([12,20])           => [20,12]
productArray([12,20])           => [20,12]
productArray([3,27,4,2])        => [216,24,162,324]
productArray([13,10,5,2,9])     => [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2])   => [2040,1920,8160,10880,6528,16320]

*/

function productArray(input) {
    // jika input hanya berisi 1 element
    // hentikan program dan kembalikan
    // array tersebut
    if (input.length == 1) return input;
    
    const output = input.map((e1, i1) => {
        // variable untuk menampung nilai yang
        // sudah dikalikan
        let tmp = null;

        
        input.forEach((e2, i2) => {
            // jika index2 sama dengan index1
            // lanjut ke index berikutnya
            if (i2 == i1) return;

            // jika tmp tidak null maka
            // kalikan nilai tmp dengan
            // element array saat ini
            if (tmp != null) tmp *= e2;

            // jika null
            // set value tmp dengan nilai
            // element array saat ini.
            else tmp = e2;
        });

        return tmp;
    });

    // selesai
    return output;
}

console.log(productArray([12,20]));           // => [20,12]
console.log(productArray([12,20]));           // => [20,12]
console.log(productArray([3,27,4,2]));        // => [216,24,162,324]
console.log(productArray([13,10,5,2,9]));     // => [900,1170,2340,5850,1300]
console.log(productArray([16,17,4,3,5,2]));   // => [2040,1920,8160,10880,6528,16320]