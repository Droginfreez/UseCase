
function luoAanestys(){
    var otsikko = document.getElementById("otsikkoKentta").value;
    var vaihtoehto1 = document.getElementById("vaihtoehtoKentta1").value;
    var vaihtoehto2 = document.getElementById("vaihtoehtoKentta2").value;

    console.log(otsikko);
    console.log(vaihtoehto1);
    console.log(vaihtoehto2);

    if(otsikko == "" || vaihtoehto1 == "" || vaihtoehto2 == ""){
        alert("Kentät ei saa olla tyhjiä!");
    }else{
        document.getElementById("otsikkoKentta").style.display = "none";
        document.getElementById("vaihtoehtoKentta1").style.display = "none";
        document.getElementById("vaihtoehtoKentta2").style.display = "none";
        document.getElementById("luo").style.display = "none";

        document.getElementById("otsikko1").innerHTML = otsikko;
        document.getElementById("vaihtoehto1").innerHTML = vaihtoehto1 + ": 0 Ääntä";
        document.getElementById("vaihtoehto2").innerHTML = vaihtoehto2  + ": 0 Ääntä";
        a = 1;
    }
}
function poistaAanestys() { if (a == 1) {  
    var elem = document.getElementById('aanestys-luonti');
    elem.parentNode.removeChild(elem);
   }
}


   function poistaAanestys2() {
    var elem2 = document.getElementById('aanestys1');
    elem2.parentNode.removeChild(elem2);
   }
   function poistaAanestys3() {
    var elem3 = document.getElementById('aanestys2');
    elem3.parentNode.removeChild(elem3);
   }
    
