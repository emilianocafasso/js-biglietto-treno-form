
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
La risposta finale (o output) sarà anch’essa da scrivere in console.\

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
*/


const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");
const form = document.getElementById("ticket-form")
const name = document.getElementById("name")
const cell_name = document.getElementById("cell_name")
const cell_offerta = document.getElementById("cell_offerta")
const cell_carrozza = document.getElementById("cell_carrozza")
const cell_CP_code = document.getElementById("cell_code-CP")
const cell_price = document.getElementById("cell_price") 

function RandomInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min
} 

form.addEventListener("submit", function(event) {
    event.preventDefault()

    //leggo i valori degli input
    const km = kmInput.value
    const eta = etaInput.value

    //calcolo prezzo base
    let prezzo = km * 0.21
    let offerta = "Biglietto Standard"

    if(eta<18) {
        prezzo *= 0.8
        offerta = "Biglietto Minorenne"
    }
    else if(eta>65) {
        prezzo *= 0.6
        offerta = "Biglietto Anziano"
    }
    
    //stampo in console
    console.log("Prezzo del biglietto: ", prezzo.toFixed(2), "€");

    cell_name.textContent = name.value
    cell_offerta.textContent = offerta

    let carrozza = RandomInteger(1, 10)
    cell_carrozza.textContent = carrozza

    let code = RandomInteger(10000, 99999)
    cell_CP_code.textContent = code

    cell_price.textContent = prezzo + "€"

})





