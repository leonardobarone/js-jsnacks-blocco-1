// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var arr = [];

for (var i = 0; i <= 5; i++ ) {
    
    var n = prompt("Inserisci un numero!");

    if ( n % 2 == 1) {
        arr.push(n);
    }
    
}

console.log(arr);