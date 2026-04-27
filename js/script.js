let eleMyInput = document.getElementById('myInput');
let elemBtnC = document.getElementById('btnC');
let elemBtnEqual = document.getElementById('btnEqual');
let elemBtnPoint = document.getElementById('btnPoint');
let calcButtons = document.querySelectorAll(".calcNum");
let opButtons = document.querySelectorAll('.calcOp');

let primoNumero = "";       // salva il primo numero.
let operatore = "";         // salva l'operatore scelto
let nuovoNumero = true;     // true = il prossimo click inizia un numero nuovo 

// inserimento numeri con rimozione dell 0 iniziale.
calcButtons.forEach(pulsante => {
    pulsante.addEventListener('click', () => {
        if (nuovoNumero) {
            eleMyInput.value = pulsante.value; // sostituisce il numero sul display
            nuovoNumero = false;
        } else if (eleMyInput.value === "0") {
            eleMyInput.value = pulsante.value;
        } else {
            eleMyInput.value += pulsante.value;
        }
    });
});

// Operatori
opButtons.forEach(op => {
    op.addEventListener('click', () => {
        primoNumero = eleMyInput.value;     // salvo il numero attuale
        operatore = op.value;               // salvo l'operatore (+, -, *, /)
        nuovoNumero = true;                 // il prossimo numero sostituisce quello precendente
    });
});

// Pulsante C per cancellare tutti i numeri e le cose inserite.
elemBtnC.addEventListener('click', () => { 
    eleMyInput.value = "0"; 
    primoNumero = "";
    operatore = "";
    nuovoNumero = true;
});

// Punto decimale
elemBtnPoint.addEventListener('click', () => {
    if (nuovoNumero) {
        eleMyInput.value = "0.";
        nuovoNumero = false;
        return;
    }
    if (!eleMyInput.value.includes('.')) {
        eleMyInput.value += '.';
    }
});


// Invio dei dati per calcolare il tutto
elemBtnEqual.addEventListener('click', calcola);

function calcola() {
    let secondoNumero = eleMyInput.value;
    let risultato = eval(primoNumero + operatore + secondoNumero);
    eleMyInput.value = risultato;
    primoNumero = "";
    operatore = "";
    nuovoNumero = false; 
}

