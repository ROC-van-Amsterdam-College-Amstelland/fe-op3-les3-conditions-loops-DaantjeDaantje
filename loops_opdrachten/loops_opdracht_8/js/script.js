function myFunction(){
    
    var i;

    for (var i=0; i<=50; i++){
        document.getElementById("output").innerHTML += i + "<br>";
        if(i == 25){
        alert("Het getal 25 is net geen bullseye!");
        }
    }

}