var kissaAanet = 5;
var koiraAanet = 5;
var kuuluuAanet = 10;
var eiKuuluAanet = 10;
var onAanestetty1 = false;
var onAanestetty2 = false;

function paivitaAanet(){
    var kissa = document.getElementById("kissaAanet");
    var koira = document.getElementById("koira");
    var kuuluu = document.getElementById("kuuluu");
    var eiKuulu = document.getElementById("eiKuulu");
    kissa.innerHTML = kissaAanet;
    koira.innerHTML = koiraAanet;
    kuuluu.innerHTML = kuuluuAanet;
    eiKuulu.innerHTML = eiKuuluAanet;
}

function aanestaKoira(){
    if(onAanestetty1==false){
        koiraAanet++;
        document.getElementById("1teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("1teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Ã?Ã?nestÃ?nyt");
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

function aanestaKuuluu(){
    if(onAanestetty2==false){
        kuuluuAanet++;
        document.getElementById("2teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("2teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Äänestänyt");
    }
    onAanestetty2 = true;
    paivitaAanet();
}

function aanestaEiKuulu(){
    if(onAanestetty2==false){
        eiKuuluAanet++;
        document.getElementById("2teksti1").style.backgroundColor = "#A9A9A9";
        document.getElementById("2teksti2").style.backgroundColor = "#A9A9A9";
    }else{
        window.alert("Olet jo Äänestänyt");
    }
    onAanestetty2 = true;
    paivitaAanet();
}

