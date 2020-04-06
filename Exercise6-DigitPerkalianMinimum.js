//Exercise 6 Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
    var faktor = [];
    for (let i = 0; i <= angka / 2; i++) { //isi faktor
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
    var min = 100;
    for (let i = 0; i < newFaktor.length; i++) {
        var temp = 0;
        for (let j = 0; j < newFaktor[i].length; j++) {
            var str = newFaktor[i][j].toString();
            temp += str.length;
        }
        if(temp < min){
            min = temp;
        }
    }
    return min;
}

    // TEST CASES
    console.log(digitPerkalianMinimum(24)); // 2
    console.log(digitPerkalianMinimum(90)); // 3
    console.log(digitPerkalianMinimum(20)); // 2
    console.log(digitPerkalianMinimum(179)); // 4
    //console.log(digitPerkalianMinimum(1)); // 2