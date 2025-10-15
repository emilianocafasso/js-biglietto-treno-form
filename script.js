
/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

/*MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone 
(non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.*/


const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const bottone = document.getElementById("genera");
const form = document.getElementById("ticket-form")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    //leggo i valori degli input
    const km = kmInput.value
    const eta = etaInput.value

    //calcolo prezzo base
    let prezzo = km * 0.21

    if(eta<18) {
        prezzo *= 0.8
    }
    else if(eta>65) {
        prezzo *= 0.6
    }
    
    //stampo in console
    console.log("Prezzo del biglietto: ", prezzo.toFixed(2), "€");
})