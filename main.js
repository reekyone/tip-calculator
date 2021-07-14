function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var tipAmt = document.getElementById("tip").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //Checks to see if bill amount is a number
    if (isNaN(billAmt) || billAmt === "") {
        document.getElementById("tiptotalamount").style.display = "none";
        alert("Please enter a number for your bill");
        return;
    }
    
    //Checks to see if bill amount is greater than 0
    if (billAmt < 1) {
        document.getElementById("tiptotalamount").style.display = "none";
        alert("Please enter a number above 0");
        return;
    }

    if (isNaN(numOfPeople)) {
        alert("Please enter a number for the amount of people splitting the bill")
    }

    //Changes numOfPeople to 1 if it's 0 or less
    if (numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("perperson").style.display = "none";
    }

    //Shows the "per person" at the end of the tip amount if more than 1 person
    if (numOfPeople > 1) {
        document.getElementById("perperson").style.display = "initial";
    }

    //Calculates the tip
    var total = (billAmt * tipAmt);
    var total2 = total / numOfPeople;

    //Shows up to the 2nd decimal place
    total = total.toFixed(2);
    total2 = total2.toFixed(2);

    document.getElementById("tiptotalamount").style.display = "block";
    document.getElementById("tipfinal").innerHTML = total;
    document.getElementById("tipamt").innerHTML = total2;
}

//Hide the "Tip Total" on load
document.getElementById("tiptotalamount").style.display = "none";
document.getElementById("perperson").style.display = "none";

//Click button to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
}

