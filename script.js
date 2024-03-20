let tomSaus = document.querySelector("#tomatesaus")
let tomaat2 = document.querySelector("#tomaat")
let mozza = document.querySelector("#mozzarella")
let olij = document.querySelector("#olijf")
let sala = document.querySelector("#salami")

let aansaus = false
let aantomaat = false
let aanmozzarella = false
let aanolijf = false
let aansalami = false

function saus(){
    if(aansaus === true){
        aansaus = false
        document.querySelector("#sauslos").style.display = "none";
    } else {
        aansaus = true
        document.querySelector("#sauslos").style.display = "block";
    }
}

tomSaus.addEventListener("click", saus)

function tom(){
    if(aantomaat === true){
        aantomaat = false
        document.querySelector("#tomaatlos").style.display = "none";
    } else {
        aantomaat = true
        document.querySelector("#tomaatlos").style.display = "block";
    }
}

tomaat2.addEventListener("click", tom)

function mozza2(){
    if(aanmozzarella === true){
        aanmozzarella = false
        document.querySelector("#mozzarellalos").style.display = "none";
    } else {
        aanmozzarella = true
        document.querySelector("#mozzarellalos").style.display = "block";
    }
}

mozza.addEventListener("click", mozza2)

function olijf2(){
    if(aanolijf === true){
        aanolijf = false
        document.querySelector("#olijflos").style.display = "none";
    } else {
        aanolijf = true
        document.querySelector("#olijflos").style.display = "block";
    }
}

olij.addEventListener("click", olijf2)

function salami2(){
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

function eindCijfer(){
    getal.textContent = "we geven je pizza een " + cijfer
}

klaar.addEventListener("click", eindCijfer)

let opnieuw = document.querySelector(".opnieuw")

function nogEenKeer(){
    location.reload()
}

opnieuw.addEventListener("click", nogEenKeer)

let jee = document.querySelector(".yay")
let boo = document.querySelector(".boe")

function geluid(){
    if(cijfer > 5){
jee.play()
    } else{
boo.play()
    }
}

klaar.addEventListener("click", geluid)