// metto bottone in variabile
const btn = document.querySelector('button');
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