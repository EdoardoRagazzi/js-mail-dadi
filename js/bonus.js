//-----CICLO FOR-----
var i;
for (i = 10; i < 31; i++) {
    if (i % 3 == 0) {
        console.log(i);
        document.getElementById('winner').innerHTML = i;
    }


}