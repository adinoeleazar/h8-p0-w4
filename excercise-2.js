function fpb(angka1, angka2) {
    // you can only write your code here!

    var result

    if (angka1 > angka2) {
        for (var a = 1; a < angka1; a++) {
            if (angka1%a === 0 && angka2%a === 0) {result = a}
        }
    }
    else if (angka1 < angka2) {
        for (var b = 1; b < angka2; b++) {
            if (angka1%b === 0 && angka2%b === 0) {result = b}
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1