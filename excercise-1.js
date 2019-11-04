function angkaPrima(angka) {
    // you can only write your code here!

    var prima = true
    for (var a = 2; a < angka; a++) {
        if (angka%a === 0) {prima = false}
    }
    if (angka < 2) {prima = false}
    return prima
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false