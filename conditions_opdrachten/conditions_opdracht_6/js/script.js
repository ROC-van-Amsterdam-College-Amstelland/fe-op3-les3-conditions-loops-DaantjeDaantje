function myCalculator(myOperator){
    var myNumber1 = parseInt(document.getElementById("input1").value);
    var myNumber2 = parseInt(document.getElementById("input2").value);

    if (myOperator == "+") {
    document.getElementById('output').innerHTML = myNumber1 + myNumber2; 
    }
    else if (myOperator == "-") {
        document.getElementById('output').innerHTML = myNumber1 - myNumber2; 
        }
        else if (myOperator == "*") {
            document.getElementById('output').innerHTML = myNumber1 * myNumber2; 
            }
            else if (myOperator == "/") {
                document.getElementById('output').innerHTML = myNumber1 / myNumber2; 
                }  
}