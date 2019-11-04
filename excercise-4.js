function cariModus(arr) {
    // you can only write your code here!

    var modus = []

    for (var a = 0; a < arr.length; a++) {
        for (var b = 0; b <= modus.length; b++)
        if (modus[b] === undefined) {
            modus[b] = []
            modus[b].push(arr[a]);
            break;
        }
        else if (modus[b][0] === arr[a]) {
            modus[b].push(arr[a]);
            break;
        }
    }

    if (modus !== undefined) {
        for (var a = 0; a < modus.length - 1; a++) {
            for (var b = a+1; b < modus.length; b++) {
                if(modus[a].length < modus[b].length) {
                    var temp = modus[a]
                    modus[a] = modus[b]
                    modus[b] = temp
                }
            }
        }
    }
    if (modus[1] === undefined || modus[0].length === modus[modus.length-1].length) {return -1}
    else {return modus[0][0]}
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1