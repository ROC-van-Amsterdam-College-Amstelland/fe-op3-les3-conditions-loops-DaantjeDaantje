function myfuction(){
    var mySaldo=50; 

    if(mySaldo>=25){
        document.getElementById("mySaldo").innerHTML="Je hebt voldoende saldo om 25 euro op te nemen.";
    }

    else{
        document.getElementById("mySaldo").innerHTML="Sorry, je hebt te weinig saldo!"; 
    }
}