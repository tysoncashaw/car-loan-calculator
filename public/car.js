
function calculation() 
{
    let totalInterest; 
    
    var priceOfVehicle = document.getElementById("myRange");
    var output = document.getElementById("value");
    var interestRate = document.getElementById("interestRate").value;
    var loanTerm = document.getElementById("loanTerm").value;
    var downPayment = document.getElementById("downPayment").value;

    output.innerHTML = priceOfVehicle.value;

    priceOfVehicle.oninput = function() {
        output.innerHTML = this.value;
        calculation();
    }

   priceOfVehicle.onmousemove = function() {
        var x = (priceOfVehicle.value/ 100000) * 100;
        var color = `linear-gradient(90deg, rgb(117,252,117)${x}%, rgb(214,214,214)${x}%)`; 
        this.style.background = color; 
    }

    if(parseFloat(interestRate) <= 0){
        var errorMsg=  document.getElementById("totalpayment");
        errorMsg.innerHTML = "Interest rate can not be 0%";
        errorMsg.setAttribute("class", "text-danger");
        return;
    }
    if(parseFloat(downPayment) >= parseFloat(priceOfVehicle)){
        var errorMsg=  document.getElementById("totalpayment");
        errorMsg.innerHTML = "Your down payment amount must be lower than the purchase price.";
        errorMsg.setAttribute("class", "text-danger");
        return;
    }
    if(parseFloat(priceOfVehicle) <= 0 || priceOfVehicle == ""){
        var errorMsg=  document.getElementById("totalpayment");
        errorMsg.innerHTML = "Price of the vehicle can not be 0";
        errorMsg.setAttribute("class", "text-danger");
        return;
    }
    if (downPayment == ""){
        downPayment = 0;
    }
    let finalPrice = parseFloat(priceOfVehicle.value) - parseFloat(downPayment);
    totalInterest =  parseFloat(interestRate)/1200;
    
    let calc = ((totalInterest + (totalInterest / (Math.pow((1 + totalInterest), loanTerm) -1))) * finalPrice).toFixed(2);

    
    var total = document.getElementById("totalpayment");
    
    fadeIn(total);
    total.innerHTML = "$" + parseFloat(calc);
    total.setAttribute("class", "");
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

