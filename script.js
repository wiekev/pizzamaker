const tomSaus = document.querySelector("#tomatesaus")
const tomaat2 = document.querySelector("#tomaat")
const mozza = document.querySelector("#mozzarella")
const olij = document.querySelector("#olijf")
const sala = document.querySelector("#salami")

let aansaus = false
let aantomaat = false
let aanmozzarella = false
let aanolijf = false
let aansalami = false

// bron: https://stackoverflow.com/questions/15318357/show-hide-image-with-javascript

function saus(){ // deze function zorgt er voor dat je de saus ziet als je op de sauspot klikt.
    if(aansaus === true){
        aansaus = false
        document.querySelector("#sauslos").style.display = "none";
    } else {
        aansaus = true
        document.querySelector("#sauslos").style.display = "block";
    }
}

tomSaus.addEventListener("click", saus)

function tom(){  // deze function zorgt er voor dat je de tomaat ziet op de pizza als je op de tomaaten klikt.
    if(aantomaat === true){
        aantomaat = false
        document.querySelector("#tomaatlos").style.display = "none";
    } else {
        aantomaat = true
        document.querySelector("#tomaatlos").style.display = "block";
    }
}

tomaat2.addEventListener("click", tom)

function mozza2(){  // deze function zorgt er voor dat je de mozzarella ziet op de pizza als je op de mozzarella bol klikt.
    if(aanmozzarella === true){
        aanmozzarella = false
        document.querySelector("#mozzarellalos").style.display = "none";
    } else {
        aanmozzarella = true
        document.querySelector("#mozzarellalos").style.display = "block";
    }
}

mozza.addEventListener("click", mozza2)

function olijf2(){  // deze function zorgt er voor dat je de olijf op de pizza ziet als je op de olijf klikt.
    if(aanolijf === true){
        aanolijf = false
        document.querySelector("#olijflos").style.display = "none";
    } else {
        aanolijf = true
        document.querySelector("#olijflos").style.display = "block";
    }
}

olij.addEventListener("click", olijf2)

function salami2(){  // deze function zorgt er voor dat je de salami op de pizza ziet als je op de salami klikt.
    if(aansalami === true){
        aansalami = false
        document.querySelector("#salamilos").style.display = "none";
    } else {
        aansalami = true
        document.querySelector("#salamilos").style.display = "block";
    }
}

sala.addEventListener("click", salami2)


let getal = document.querySelector("p")
let klaar = document.querySelector(".klaar")

let cijfer = Math.random() *10
cijfer = Math.ceil(cijfer)

function eindCijfer(){  // deze function zorgt er voor dat er een random cijfer tussen de 1 en 10 komt na de tekst 'we geven je pizza een '.
    getal.textContent = "we geven je pizza een " + cijfer
}

klaar.addEventListener("click", eindCijfer)


// bron van pagina reload: https://www.w3schools.com/jsref/met_loc_reload.asp

let opnieuw = document.querySelector(".opnieuw")

function nogEenKeer(){  // deze function zorgt er voor dat de pagina opnieuw wordt geladen.
    location.reload()
}

opnieuw.addEventListener("click", nogEenKeer)


// bron voor de audio: https://stackoverflow.com/questions/9419263/how-to-play-audio

let jee = document.querySelector(".yay")
let boo = document.querySelector(".boe")

function geluid(){  // deze function zorgt er voor dat je een geluid krijgt als je een cijfer krijgt, als het boven een 5 is het een jee geluid. als het 5 of lager is is het een boo.
    if(cijfer > 5){
jee.play()
    } else{
boo.play()
    }
}

klaar.addEventListener("click", geluid)