console.log('JS OK');

//* FUNZIONE RANDOM
// min = numero minimo | max = numero massimo | numbers = quantità di numeri
random = (min, max, numbers) => {
    const totNumbers = []; //array vuoto per ospitare i numeri casuali
    for (i = 0; i < numbers; i++){
        randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min; //randomizzo da un minimo ad un massimo
        while (totNumbers.includes(randomNumber)); //mi assicuro di non avere doppioni
        totNumbers.push(randomNumber); //quindi inserisco nell'array
    }
    return totNumbers; //restituisco l'array completo
}

//* FUNZIONE PER CONTENITORE ELEMENTI
buildBox = () => {
    const box = document.createElement('div');
    box.className = 'col';
    box.innerText = 'number'
    return box;
}

//prendo una variabile per la row
const row = document.getElementById('main-row');

//dichiaro quanti numeri voglio
const numbers = 5;

//richiamo la funzione random
random(1, 99, numbers); 

//creo i div per i numeri
for (let i = 0; i < numbers; i++) {
    const box = buildBox();
    row.appendChild(box);
}