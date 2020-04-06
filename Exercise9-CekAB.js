//Exercise 9 Cek AB
function checkAB(num) {
    var target;
    for (let i = 0; i < num.length; i++) {
        // tentukan target
        if(num[i] === 'a'){
            target = 'b';
        } else if(num[i] === 'b'){
            target = 'a';
        } else {
            target = 'no target'
        }
        for (let j = i+1; j < num.length; j++) {
            if(num[j] === target && j-i === 4){
                return true;
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false