let tomSaus = document.querySelector("#tomatesaus")
let tomaat2 = document.querySelector("#tomaat")
let mozza = document.querySelector("#mozzarella")
let olij = document.querySelector("#olijf")
let sala = document.querySelector("#salami")

function saus(){
    if(aan === true){
        aan = false
        document.querySelector("#sauslos").style.display = "none";
    } else {
        aan = true
        document.querySelector("#sauslos").style.display = "block";
    }
}

function tom(){
    if(aan === true){
        aan = false
        document.querySelector("#tomaatlos").style.display = "none";
    } else {
        aan = true
        document.querySelector("#tomaatlos").style.display = "block";
    }
}

function mozza2(){
    if(aan === true){
        aan = false
        document.querySelector("#mozzarellalos").style.display = "none";
    } else {
        aan = true
        document.querySelector("#mozzarellalos").style.display = "block";
    }
}

function olijf2(){
    if(aan === true){
        aan = false
        document.querySelector("#olijflos").style.display = "none";
    } else {
        aan = true
        document.querySelector("#olijflos").style.display = "block";
    }
}

function salami2(){
    if(aan === true){
        aan = false
        document.querySelector("#salamilos").style.display = "none";
    } else {
        aan = true
        document.querySelector("#salamilos").style.display = "block";
    }
}


tomSaus.addEventListener("click", saus)
tomaat2.addEventListener("click", tom)
mozza.addEventListener("click", mozza2)
olij.addEventListener("click", olijf2)
sala.addEventListener("click", salami2)

let aan = false
    

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