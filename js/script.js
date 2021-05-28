// VARIABLES

var manRandom = Math.floor(Math.random() * 6) + 1;
var pcRandom = Math.floor(Math.random() * 6) + 1;

console.log(manRandom);
console.log(pcRandom);

// Adesso che abbiamo generato i due numeri random, stabiliamo il vincitore confrontando i due numeri:

if (manRandom == pcRandom) {

    document.getElementById('winner').innerHTML = '' + 'Draw';

} else if (manRandom < pcRandom) {

    document.getElementById('winner').innerHTML = '' + 'The Winner is the Pc';
} else {

    document.getElementById('winner').innerHTML = '' + 'The Winner is the Man';
}

