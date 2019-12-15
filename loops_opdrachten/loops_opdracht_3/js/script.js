function myFunction(){
    
    var i;

    for (var i=1; i<=50; i++){
        document.getElementById("output").innerHTML += i + "<br>";
        console.log(i); 

        if (i%20 == 0){
            document.getElementById("output").innerHTML += "Dit is een mooie getal<br>";    
        }

        else{
            document.getElementById("output").innerhtml += i + "<br>";
        }
    }
}