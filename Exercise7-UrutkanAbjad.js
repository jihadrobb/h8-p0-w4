//Exercise 7 Urutkan Abjad
function urutkanAbjad(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var arr = []; //kasih nomor urut
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if(str[i] === alphabet[j]){
                arr.push([str[i], j]);
            }
        }
    }
    //urutkan berdasarkan nomor
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i][1] > arr[j][1]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    //output tanpa nomor
    var newStr = '';
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i][0];
    }
    return newStr;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'