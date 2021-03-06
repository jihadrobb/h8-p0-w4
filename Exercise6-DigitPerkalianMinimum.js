//Exercise 6 Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
    if (angka <= 0) {
        return 0;
    } else {
        var faktor = [];
        for (let i = 0; i <= angka; i++) { //isi faktor
            if (angka % i === 0) {
                faktor.push([i, angka / i]);
            }
        }
        var newFaktor = [faktor[0]]; //saring faktor duplikat
        for (let i = 1; i < faktor.length; i++) {
            var kembar = false;
            for (let j = 0; j < newFaktor.length; j++) {
                if (faktor[i][0] === newFaktor[j][1]) {
                    kembar = true;
                }
            }
            if (!kembar) {
                newFaktor.push(faktor[i]);
            }
        }
        // cari faktor minimum
        var str = newFaktor[0][0].toString();
        var str2 = newFaktor[0][1].toString();
        var min = str.length + str2.length;
        for (let i = 1; i < newFaktor.length; i++) {
            var temp = 0;
            for (let j = 0; j < newFaktor[i].length; j++) {
                str = newFaktor[i][j].toString();
                temp += str.length;
            }
            if (temp < min) {
                min = temp;
            }
        }
        return min;
    }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(0)); // 0