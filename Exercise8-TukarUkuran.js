//Exercise 8 Tukar Ukuran
function tukarBesarKecil(kalimat) {
    var alphabet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'];
    var str = '';
    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j < alphabet[0].length; j++) {
            if(kalimat[i] === alphabet[0][j]){
                str += alphabet[1][j];
            } else if(kalimat[i] === alphabet[1][j]){
                str += alphabet[0][j];
            }
        }
        if(str.length <= i){ //masukan karakter yg sama kalau tidak membalik ukuran
            str += kalimat[i];
        }
    }
    return str;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"