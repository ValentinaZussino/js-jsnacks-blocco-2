// ESERCIZIO 1
// metto bottone in variabile
const btn = document.getElementById('stamp');
// creo funzione
const stampa = function(){
    // prendo value di input
    let inputValue = document.getElementById('vz_number').value;
    // se pari lo stampo
    if(inputValue %2 == 0){
        document.querySelector('span').innerHTML = inputValue;
    } else { // se dispari successivo
        inputValue ++;
        document.querySelector('span').innerHTML = inputValue;
    }
    // pulisco input
    document.getElementById('vz_number').value = '';
}
// on click
btn.addEventListener('click', stampa);

// ESERCIZIO 2
// creo un array per nomi, uno per cognomi
const arrayNomi = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5'];
const arrayCognomi = ['cognome1', 'cognome2', 'cognome3', 'cognome4', 'cognome5'];
// metto bottone in variabile 
const btnList = document.getElementById('list');
// genero ciclo e appendo li nuovi
const generate = function (){
    document.querySelector('ul').innerHTML = '';
    for(let i = 0; i < 5; i++){
    let ospiteLi = document.createElement('li');
    let nomeOspite = arrayNomi[Math.floor(Math.random() * (arrayNomi.length))] + ' ' + arrayCognomi[Math.floor(Math.random() * (arrayCognomi.length))];
    ospiteLi.append(nomeOspite);
    document.querySelector('ul').append(ospiteLi)
    }
}
btnList.addEventListener('click', generate)

// ESERCIZIO 3
// prendo btn calculate
const calcBtn = document.getElementById('calculate');
// creo array con numeri interi 
const numeri = [1, 2, 3, 4, 5];
const nLength = numeri.length;
// creo ciclo per fare somma
const avviaVedi = function(){
    let odd = 0;
    for(let i = 0; i < nLength; i++){
        if([i] %2 !== 0){
            odd += numeri[i];
        }
    }
    document.getElementById('odd-sum').innerHTML += odd;
}
// on click
calcBtn.addEventListener('click', avviaVedi);