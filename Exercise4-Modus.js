// Exercise 4 Cari Modus
function cariModus(arr) {
    var modus;
    var jumlah = 0;
    for (let i = 0; i < arr.length; i++) {
        var modustemp = arr[i];
        var jumlahtemp = 1;
        for (let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] === arr[j]){
                jumlahtemp++;
            }
        }
        if(jumlahtemp > jumlah){
            modus = modustemp;
            jumlah = jumlahtemp;
        }
    }
    if(jumlah === 1 || jumlah === arr.length){
        return -1;
    } else {
        return modus;
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1