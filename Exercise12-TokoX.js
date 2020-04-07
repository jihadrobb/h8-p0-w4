//Exercise 12 Toko X
function countProfit(shoppers) {
    if (shoppers.length === 0) {
        return [];
    } else {
        let listBarang = [
            ['Sepatu Stacattu', 1500000, 10],
            ['Baju Zoro', 500000, 2],
            ['Sweater Uniklooh', 175000, 1]
        ];
        var jumlahBarang = []; //jumlah awal barang di toko
        for (let i = 0; i < listBarang.length; i++) {
            jumlahBarang.push(listBarang[i][2]);
        }
        for (let i = 0; i < shoppers.length; i++) {
            for (let j = 0; j < listBarang.length; j++) {
                if (shoppers[i].product === listBarang[j][0] && shoppers[i].amount <= listBarang[j][2]) {
                    listBarang[j][2] -= shoppers[i].amount;
                    listBarang[j].push(shoppers[i].name); //shoppers disimpan sementara di listBarang
                }
            }
        }
        var buyers = []; //array baru untuk output
        for (let i = 0; i < listBarang.length; i++) {
            var product = listBarang[i][0];
            buyers.push({product});
            //masukin shoppers dari listBarang
            if (listBarang[i].length > 3) {
                var newArr = [];
                for (let j = 3; j < listBarang[i].length; j++) {
                    newArr.push(listBarang[i][j]);
                }
                buyers[i].shoppers = newArr;
            } else {
                buyers[i].shoppers = [];
            }
            buyers[i].leftover = listBarang[i][2]; //leftover
            buyers[i].totalProfit = (jumlahBarang[i] - listBarang[i][2]) * listBarang[i][1]; //total profit
        }
        return buyers;
    }
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]