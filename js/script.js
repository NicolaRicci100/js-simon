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

//variabile per il timer
const timer = document.getElementById('timer');

//bottone di gioco
const playButton = document.getElementById('play');

//creo un array per la lista di numeri
const listNumbers = [];
//creo un array per vedere se i numeri alla fine saranno giusti
const isValidNUmber = [];
//creo i div per i numeri
for (let i = 0; i < 5; i++) { //giro 5 volte
    const randomNumber = random(1, 99, listNumbers); //genero il numero random da 1 a 99
    listNumbers.push(randomNumber); //inserisco il numero in lista
    const box = buildBox(); //inserisco il contenitore per il numero
    box.innerText = randomNumber; //inserisco il numero nel contenitore
    row.appendChild(box); //inserisco le col nella row
    console.log(listNumbers);
}

let seconds = 30; //durata del timer
timer.innerText = seconds; //mostro il timer
const counter = setInterval(() =>{
    timer.innerText = --seconds; //il tempo scorre
    if(seconds === 0){ //allo 0...
        clearInterval(counter); //il timer si ferma
        timer.innerText = 'TEMPO SCADUTO'
        row.innerHTML = ''; //i numeri spariscono
        playButton.classList.remove('d-none'); //posso vedere il bottone
        document.getElementById("play").addEventListener("click", function(){ //se premo il bottone posso giocare
            for (let i = 0; i < 5; i++){
                let respond = prompt('scrivi uno dei numeri che hai visto');
                console.log(respond);
                isValidNUmber.push(respond); //carico i numeri nell'array
                console.log(isValidNUmber);
            }
            if (isValidNUmber.toString() === listNumbers.toString()){ //comparo gli array dei numeri dell'utente con quelli casuali
                timer.innerText = 'HAI VINTO! hai azzeccato tutti i numeri'; //se azzecchi tutti i numeri
                playButton.className = ('d-none'); //rimuovo il bottone
            } else{
                timer.innerText = 'HAI PERSO! i numeri erano '+ listNumbers; //se sbagli almeno un numero
                playButton.className = ('d-none'); //rimuovo il bottone
            }
        })
    }
}, 1000);