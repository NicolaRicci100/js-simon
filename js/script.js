console.log('JS OK');

//* FUNZIONE RANDOM
// min = numero minimo | max = numero massimo | blacklist = numeri che ho già
const random = (min, max, blacklist) => {
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min; //randomizzo da un minimo ad un massimo
        } while (blacklist.includes(randomNumber)); //mi assicuro di non avere doppioni
    return randomNumber; //restituisco il numero
    
}

//* FUNZIONE PER CONTENITORE ELEMENTI
const buildBox = () => {
    const box = document.createElement('div'); //creo il div
    box.className = 'col'; //metto la classe di Bootstrap
    return box; //restituisco il div completo
}

//prendo una variabile per la row
const row = document.getElementById('main-row');

//creo un array per la lista di numeri
const listNumbers = [];

//creo i div per i numeri
for (let i = 0; i < 5; i++) { //giro 5 volte
    const randomNumber = random(1, 99, listNumbers); //genero il numero random da 1 a 99
    listNumbers.push(randomNumber); //inserisco il numero in lista
    const box = buildBox(); //inserisco il contenitore per il numero
    box.innerText = randomNumber; //inserisco il numero nel contenitore
    row.appendChild(box); //inserisco le col nella row
}

const timer = document.getElementById('timer');

let seconds = 30;
timer.innerText = seconds;
const counter = setInterval(() =>{
    timer.innerText = --seconds;
    if(seconds === 0){
        clearInterval(counter);
        timer.innerText = 'TEMPO SCADUTO'
        row.innerHTML = '';
    }
}, 1000)