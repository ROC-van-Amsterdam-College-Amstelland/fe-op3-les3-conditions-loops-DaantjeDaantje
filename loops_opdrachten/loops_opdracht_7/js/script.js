function myFunction(){

    for (var i=1; i<=100; i++){

        document.getElementById("output").innerHTML += "<br>" + i;
        console.log(i);

        if (i%3 == 0 && i%5 == 0){
            document.getElementById("output").innerHTML += " VET COOL";    
        }
        else if (i%3 == 0){
            document.getElementById("output").innerHTML += " VET";    
        }
        
        else if(i%5 == 0){
            document.getElementById("output").innerHTML += " COOL";
        }
    }
}