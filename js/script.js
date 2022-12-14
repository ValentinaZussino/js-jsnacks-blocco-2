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
const numeri = [1, 2, 3, 4, 5, 6, 7, 8];
const nLength = numeri.length;
// creo funzione con ciclo per fare somma
const avviaVedi = function(){
    let odd = 0;
    for(let i = 0; i < nLength; i++){
        if(i %2 != 0){
            odd += numeri[i];
        }
    }
    document.getElementById('odd-sum').innerHTML = 'La somma &egrave; ' + odd;
}
// on click
calcBtn.addEventListener('click', avviaVedi);

// ESERCIZIO 4
// creo due array
const array1 = [1, 2, 3, 1, 2, 3];
const array2 = [1, 2, 3, 4, 5, 1, 2, 3];
// prendo le lunghezze
let length1 = array1.length;
let length2 = array2.length;
console.log(length1, length2)

// comparo lunghezze e aggiungo
if(length1 < length2){
    let lengthDiff = length2 - length1;
    for(let i = 0; i < lengthDiff; i++){
        array1.push('n')
    }
} else if(length2 < length1){
    let lengthDiff = length1 - length2;
    for(let i = 0; i < lengthDiff; i++){
        array2.push('n')
    }
} else{
    console.log('sono uguali')
}
console.log(array1, array2)
document.getElementById('es4').innerHTML = ' Contenuto primo ' + array1 + ' Contenuto secondo ' + array2;

