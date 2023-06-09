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
console.log(random(1, 99, 5)); //faccio apparire l'array generato dalla funzione nel log


const row = document.getElementById('main-row');

//     const numbersLocation = document.createElement('div');
//     numbersLocation.className = 'col';
//     numbersLocation.innerText = 'numero';

// row.appendChild(numbersLocation);
let col = '';
col = `<div class="col">${random(1, 99, 5)}</div>`;
row.innerHTML = col;