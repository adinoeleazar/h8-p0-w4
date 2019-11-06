function changeMe(arr) {
    // you can only write your code here!



    for (var i = 0; i < arr.length; i++) {
        var year = 2019
        var umur = ''
        var id = i+1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':' + '\n'
        if (arr[i][3] === undefined || arr[i][3] > year) {umur = 'Invalid Birth Year'}
        else {umur = year - arr[i][3]}
        var bio = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur
            } 
            console.log(id, bio)        
    }
    if (arr.length === 0) {return console.log('""')}
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""