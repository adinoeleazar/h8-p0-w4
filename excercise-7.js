function urutkanAbjad(str) {
    // you can only write your code here!
    
    var result = []
    var display = ''

    for (var i = 0; i < str.length; i ++) {
        result.push(str[i])
    }

    for (var a = 0; a < result.length - 1; a++) {
        for (var b = a+1; b < result.length; b++) {
            if (result[b] < result[a]) {
                var temp = result[b]
                result[b] = result[a]
                result[a] = temp
            }
        }
    }

    for (var i = 0; i < result.length; i++) {
        display += result[i]
    }
    
    return display
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'