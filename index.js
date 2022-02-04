var kissaAanet = 5;
var koiraAanet = 5;
var konsolit = 10;
var Tietokoneet = 10;
var onAanestetty1 = false;
var onAanestetty2 = false;

function paivitaAanet(){
    var kissa = document.getElementById("kissaAanet");
    var koira = document.getElementById("koira");
    var kuuluu = document.getElementById("konsoli");
    var eiKuulu = document.getElementById("tietokone");
    kissa.innerHTML = kissaAanet;
    koira.innerHTML = koiraAanet;
    kuuluu.innerHTML = konsolit;
    eiKuulu.innerHTML = Tietokoneet;
}

function aanestaKoira(){
    if(onAanestetty1==false){
        koiraAanet++;
        document.getElementById("1teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("1teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Äänestänyt");
    }
    onAanestetty1 = true;
    paivitaAanet();
}

function aanestaKissa(){
    if(onAanestetty1==false){
        kissaAanet++;
        document.getElementById("1teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("1teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Äänestänyt");
    }
    onAanestetty1 = true;
    paivitaAanet();
}

function aanestaKonsoli(){
    if(onAanestetty2==false){
        konsolit++;
        document.getElementById("2teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("2teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Äänestänyt");
    }
    onAanestetty2 = true;
    paivitaAanet();
}

function aanestaTietokone(){
    if(onAanestetty2==false){
        Tietokoneet++;
        document.getElementById("2teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("2teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Äänestänyt");
    }
    onAanestetty2 = true;
    paivitaAanet();
}

