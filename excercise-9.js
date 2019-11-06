function checkAB(num) {
    // you can only write your code here!

    var locA = []
    var locB = []
    var jarakTerdekat = []

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {locA.push(i)}
        else if (num[i] === 'b') {locB.push(i)}
    }

    for (var i = 0; i < locA.length; i++) {
        for (var j = 0; j < locB.length; j++) {
            jarakTerdekat.push(Math.abs(locA[i] - locB[j]))
        }
    }
    
// catatan : saya sorting karena awalnya salah mengerti maksud soalnya
    for (var i = 0; i < jarakTerdekat.length - 1; i++) {
        for (var j = i+1; j < jarakTerdekat.length; j++) {
            if (jarakTerdekat[j] < jarakTerdekat[i]) {
                var temp = jarakTerdekat[j]
                jarakTerdekat[j] = jarakTerdekat[i]
                jarakTerdekat[i] = temp
            }
        }
    }

    for (var i = 0; i < jarakTerdekat.length; i++) {
        if (jarakTerdekat[i] === 4) {return true}
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false