//Exercise 15 Highest Score
function highestScore(students) {
    //sortir kelas
    var kelas = [];
    for (let i = 0; i < students.length; i++) {
        var kembar = false;
        for (let j = 0; j < kelas.length; j++) {
            if(students[i].class === kelas[j]){
                kembar = true;
            }
        }
        if(!kembar){
            kelas.push(students[i].class);
        }
    }
    //set nilai tertinggi berdasarkan kelas
    var highest ={};
    for (let i = 0; i < kelas.length; i++) {
        var max = {name: '', score: 0}
        for (let j = 0; j < students.length; j++) {
            if(kelas[i] === students[j].class && max.score < students[i].score){
                max.score = students[i].score;
                max.name = students[i].name;
            }
        }
        highest[kelas[i]] = max;
    }
    return highest;
}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}