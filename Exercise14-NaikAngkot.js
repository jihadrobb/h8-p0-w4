//Exercise 14 Naik Angkot
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var data = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        var penumpang = arrPenumpang[i][0];
        data.push({penumpang});
        data[i].naikDari = arrPenumpang[i][1];
        data[i].tujuan = arrPenumpang[i][2];
        var indexAsal;
        for (let j = 0; j < rute.length; j++) {
            if(data[i].naikDari === rute[j]){
                indexAsal = j;
            }
        }
        var indexTujuan;
        for (let j = 0; j < rute.length; j++) {
            if(data[i].tujuan === rute[j]){
                indexTujuan = j;
            }
        }
        if(indexAsal > indexTujuan) { //Kalau naik arah sebaliknya
            var temp = indexAsal;
            indexAsal = indexTujuan;
            indexTujuan = temp;
        }
        data[i].bayar = (indexTujuan-indexAsal)*2000;
    }
    return data;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  console.log(naikAngkot([])); //[]
  console.log(naikAngkot([['Jihad', 'F', 'A'], ['Heri', 'B', 'A']]));