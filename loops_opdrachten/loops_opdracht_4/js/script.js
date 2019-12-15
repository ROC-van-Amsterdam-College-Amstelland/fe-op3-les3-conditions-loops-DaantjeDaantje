function myFunction(){
    
    var i;

    for (var i=0; i<=1000; i+=10){
        document.getElementById("output").innerHTML += i + "<br>";
        console.log(i); 
    }
}