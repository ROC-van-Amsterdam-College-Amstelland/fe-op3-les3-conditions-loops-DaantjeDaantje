function myFunction(){
    document.getElementById("output").innerHTML ="";
    var length = document.getElementById("input").value;
    for (let i = 0; i <=length; i++) {
        document.getElementById("output").innerHTML += i + "<br>";
        console.log(i); 
    }
}