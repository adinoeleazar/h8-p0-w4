function ubahHuruf(kata) {
    // you can only write your code here!

    var result = ''

    for (var a = 0; a < kata.length; a++) {
        var kataBaru = kata[a].charCodeAt() + 1
        result += String.fromCharCode(kataBaru)
    }
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu