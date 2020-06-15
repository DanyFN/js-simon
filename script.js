// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

//genero i 5 numeri random da memorizzare senza ripetizioni


$(document).ready(function () {

  //CREO ARRAY CON I UNUMERI DA INDOVINARE
  var arrayNumeriRandom = [];
  var i = 0;
  while ( i < 5) {
    //CONTROLLO CHE NON CI SIANO RIPETIZIONI
    var numeriRandom = Math.floor(Math.random() * 100) + 1;
    if (!arrayNumeriRandom.includes(numeriRandom)) {
      var arrayPush = arrayNumeriRandom.push(numeriRandom);
       i++
    }
  }
  //STAMPO CON UN ALERT I NUMERI DA MEMORIZZARE
  alert("Memorizza i seguenti numeri: " + arrayNumeriRandom);

  //RICHIAMO LA FUNZIONE
  setTimeout(myFunction, 30000);


  function myFunction() {
    //INIZIALIZZO 2 ARRAY VUOTI,UNO PER I NUMERI GIUSTI E L'ALTRO PER QUELLIO SBAGLIATI
    var numeriGiusti = [];
    var numeriSbagliati = [];
    //CREO 2 CONTATORI X STABILIRE IL NUMERI DI NUMERI INDOVINATI O SBAGLIATI
    var count = 0;
    var incr = 0;

    //CREO CONDIZIONE PER STABILIRE QUALI E QUANTI NUMERI HO INDOVINATO
    for (var i = 0; i < arrayNumeriRandom.length; i++) {

      var indovina = parseInt( prompt("inserisci i numeri che ti ricordi") );

      if (arrayNumeriRandom.includes(indovina)) {
        numeriGiusti.push(indovina);
        count++;
      }else {
        numeriSbagliati.push(indovina);
        incr++;
      }
    }

    console.log("HAI INSERITO " + count + " NUMERI GIUSTI: " + numeriGiusti);
    console.log("HAI SBAGLIATO " + incr + " NUMERI: " + numeriSbagliati);
  }
});
