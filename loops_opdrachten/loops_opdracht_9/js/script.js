function myFunction(){
    
    var i;
    var j;

    for (var i=1; i<=5; i++){
        document.getElementById("output").innerHTML += i + "<br>";
        console.log(i);

        if(i == 5){
            document.getElementById("output").innerHTML += "Het einde is bereikt!<br>";
        }
    }

    for (var j=5; j>=1; j--){
        document.getElementById("output").innerHTML += j + "<br>";
        console.log(j);

        if(j == 1){
            document.getElementById("output").innerHTML += "Het begin is het begin<br>";
        }
    }    
}