let firstName

document.getElementById("myButton").onclick = function() {

    firstName = document.getElementById("myText").value

    console.log(firstName, "A USER INPUTTED THEIR NAME.")
    
    document.getElementById("p1").innerHTML = "Hello, " + firstName
}







