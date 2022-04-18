function compute() {
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var tahun = document.getElementById("tahun").value;

    if (amount == "") { 
        alert("Amount can't by empty or alphabet character");
        document.getElementById("amount").focus();
        return false;
    } else {
        if (amount <= 0) { 
            alert("Enter a positive number");
            document.getElementById("amount").focus();
            return false;
        }
    }


    var has = new Date().getFullYear(); //Here get the year
    var future = parseInt(has, 10) + parseInt(tahun, 10);
    var interest = amount * tahun * rate / 100;
    var result = "If you deposit <mark>" + amount + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("hasil").innerHTML = result;
}
