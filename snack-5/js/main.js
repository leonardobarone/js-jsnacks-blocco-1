// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var arr = [];

for (var i = 0; i <= 5; i++ ) {
    
    var n = parseInt(prompt("Inserisci un numero!"));

    if ( n % 2 == 1) {
        arr.push(n);
    }
    
}

var testo = '';

for (var i = 0; i < arr.length; i++) {
    
    var li = document.createElement("li");

    li.className = "prova"
     
    li.appendChild(document.createTextNode(arr[i]));
     
    document.getElementById("pippo").appendChild(li);
    
}


