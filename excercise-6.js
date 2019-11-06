function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    
    var pengali = []
    
    for (var a = 1; a <= angka; a++) {
      for (var b = angka; b >= 1; b--)

        if (a*b === angka) {
          
          pengali.push(String(a) + String(b))
      }
    }

    for (var a = 0; a < pengali.length - 1; a++) {
      for (var b = a+1; b < pengali.length; b++) {

        if (pengali[b].length < pengali[a].length) {
          var temp = pengali[b]
          pengali[b] = pengali[a]
          pengali[a] = temp
        }
      }
    }
    return pengali[0].length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2