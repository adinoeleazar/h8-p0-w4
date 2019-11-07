function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var display = []
    
    for (var i = 0; i < arrPenumpang.length; i++) {
        
        var result = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 2000
        }

        for (var j = 0; j < rute.length; j++) {
            
            if (result.naikDari === rute[j]) {var awal = j}
            else if (result.tujuan === rute[j]) {var akhir = j}

            var jarak = akhir - awal
        }
        
        result.bayar *= jarak
        
        display.push(result)

    }
    return display
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]