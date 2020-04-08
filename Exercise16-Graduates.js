//Exercise 16 Graduates
function graduates (students) {
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
            kelas.push(students[i].class)
        }
    }
    //masukin student yg lulus ke kelasnya
    var output = {};
    for (let i = 0; i < kelas.length; i++) {
        var grad = [];
        for (let j = 0; j < students.length; j++) {
            if(kelas[i] !== students[j].class || students[j].score < 75){
                continue;
            } else {
                var gradtemp = {name: students[j].name, score: students[j].score};
                grad.push(gradtemp);
            }
        }
        output[kelas[i]] = grad;
    }
    return output;
  }
  
  console.log(graduates([
    {
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}