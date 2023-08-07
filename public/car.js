
function calculation(event) 
{
    let totalInterest; 
    
    const priceOfVehicle = document.getElementById("priceOfVehicle").value;
    const interestRate = document.getElementById("interestRate").value;
    const loanTerm = document.getElementById("loanTerm").value;
    const downPayment = document.getElementById("downPayment").value;

    if(parseFloat(interestRate) <= 0){
        var errorMsg=  document.getElementById("totalpayment");
        errorMsg.innerHTML = "Interest rate can not be 0%";
        errorMsg.setAttribute("class", "text-danger");
        return;
    }

    let finalPrice = parseFloat(priceOfVehicle) - parseFloat(downPayment);
    totalInterest =  parseFloat(interestRate)/1200;
    
    let calc = ((totalInterest + (totalInterest / (Math.pow((1 + totalInterest), loanTerm) -1))) * finalPrice).toFixed(2);

    
    var total=document.getElementById("totalpayment");
    fadeIn(total);
    total.innerHTML = "$" + parseFloat(calc);
    

    
    event.preventDefault();
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