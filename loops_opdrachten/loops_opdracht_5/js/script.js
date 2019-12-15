function myFunction(){
    
    var i;

    for (var i=1; i<=20; i++){
        
        if (i%2 == 0){
            document.getElementById("output").innerHTML += i + "<br>";    
        }

        else{
            console.log(i);
        }
    }
}