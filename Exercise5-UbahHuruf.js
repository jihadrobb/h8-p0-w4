//Exercise 5 Ubah Huruf
function ubahHuruf(kata) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var katabaru = '';
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if(kata[i] === alphabet[j] && j === alphabet.length-1){
                katabaru += alphabet[0];
            } else if (kata[i] === alphabet[j]){
                katabaru += alphabet[j+1];
            }
        }
    }
    return katabaru;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu