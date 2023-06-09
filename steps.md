## Descrizione:
Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
### Bonus:
- Mostriamo il countdown dei 30 secondi in pagina
- Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt

# Steps

**FUNZIONE NUMERI CASUALI**
- creo una array vuoto
- genero un numero casuale *(da 1 a 99)*
    - **SE** c'è già, non lo inserisco nell'array
    - **ALTRIMENTI** lo inserisco nell'array
- ripeto il ciclo fino a che nell'array non ho 5 numeri