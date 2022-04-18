function compute()
{
    var jumlah = document.getElementById("jumlah").value;
    var rate = document.getElementById("rate").value;
    var tahun = document.getElementById("tahun").value;

    if (jumlah == "") {
        alert("Amount can't by empty or alphabet character");
        document.getElementById("jumlah").focus();
        return false;
    } else {
        if (jumlah <= 0) { 
            alert("Enter a positive number");
            document.getElementById("jumlah").focus();
            return false;
        }
    }


    var tahun1 = new Date().getFullYear();
    var future = parseInt(tahun1, 10) + parseInt(tahun, 10);
    var interest = jumlah * tahun * rate / 100;
    var result = "If you deposit <mark>" + jumlah + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML = result;
}

function showVal(newVal) { 
    document.getElementById("hasil").innerHTML = newVal + '%';
}
        
