function myfuction() {
    var mySaldo = 70; 

    if(mySaldo == 500) {
        document.getElementById("mySaldo").innerHTML="Salaris gestort";
    }

    else if(mySaldo > 500) {    
    document.getElementById("mySaldo").innerHTML="Salaris gestort met bonus";
    }

    else {
        document.getElementById("mySaldo").innerHTML="Nog geen salaris gestort";
    }
}