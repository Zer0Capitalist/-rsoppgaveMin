var klikkeKnappEl = document.getElementById("klikkeknapp");
var utskriftEl = document.getElementById("utskrift");
var oppgradering1El = document.getElementById("oppgradering1");
var oppgradering2El = document.getElementById("oppgradering2");

klikkeKnappEl.addEventListener("click", beregnKlikk)
oppgradering1El.addEventListener("click", oekpoengperklikk)

var antallKlikk = 0;
var poengperklikk = 1;

function beregnKlikk(e) {
    antallKlikk = antallKlikk + poengperklikk;
    utskriftEl.innerHTML = "Du har klikket " + antallKlikk + " ganger.";
    
}

function oekpoengperklikk(e){
    if(antallKlikk > 99){
        antallKlikk = antallKlikk - 100;
        poengperklikk++;
        klikkeKnappEl.innerHTML = "+" + poengperklikk;
        utskriftEl.innerHTML = "Du har kjøpt en oppgradering og har nå " + antallKlikk + " poeng igjen";
    } else {
        alert("Du har ikke nok poeng enda, klikk mer.")
    }
   
    }
