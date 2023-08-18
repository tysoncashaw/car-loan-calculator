
function calculation() 
{
    let totalInterest; 
    
    var priceOfVehicle = document.getElementById("myRange");
    var output = document.getElementById("value");
    var interestRate = document.getElementById("interestRate");
    var loutput = document.getElementById("lvalue");
    var loanTerm = document.getElementById("loanTerm");
    var ltoutput = document.getElementById("ltvalue");
    var downPayment = document.getElementById("downPayment");
    var dpoutput = document.getElementById("dpvalue");

    
    priceOfVehicle.oninput = function() {
        output.innerHTML = this.value;
        calculation();
    }

   priceOfVehicle.onmousemove = function() {
        var x = (priceOfVehicle.value/ 100000) * 100;
        var color = `linear-gradient(90deg, rgb(117,252,117)${x}%, rgb(214,214,214)${x}%)`; 
        this.style.background = color; 
    }

    downPayment.oninput = function() {
        dpoutput.innerHTML = this.value;
        calculation();
    }

   downPayment.onmousemove = function() {
        var x = (downPayment.value/ 50000) * 100;
        var color = `linear-gradient(90deg, rgb(117,252,117)${x}%, rgb(214,214,214)${x}%)`; 
        this.style.background = color; 
    }

    loanTerm.oninput = function() {
        ltoutput.innerHTML = this.value;
        calculation();
    }

   loanTerm.onmousemove = function() {
        var x = (loanTerm.value/ 84) * 100;
        var color = `linear-gradient(90deg, rgb(117,252,117)${x}%, rgb(214,214,214)${x}%)`; 
        this.style.background = color; 
    }

    interestRate.oninput = function() {
        loutput.innerHTML = this.value;
        calculation();
    }

   interestRate.onmousemove = function() {
        var x = (interestRate.value/ 100) * 100;
        var color = `linear-gradient(90deg, rgb(117,252,117)${x}%, rgb(214,214,214)${x}%)`; 
        this.style.background = color; 
    }

    if(parseFloat(downPayment.value) >= parseFloat(priceOfVehicle.value)){
        var errorMsg=  document.getElementById("totalpayment");
        errorMsg.innerHTML = "Your down payment amount must be lower than the purchase price.";
        errorMsg.setAttribute("class", "text-danger");
        return;
    }
    if(parseFloat(priceOfVehicle.value) <= 0 || priceOfVehicle.value == ""){
        var errorMsg=  document.getElementById("totalpayment");
        errorMsg.innerHTML = "Price of the vehicle can not be 0";
        errorMsg.setAttribute("class", "text-danger");
        return;
    }
    if (downPayment.value == ""){
        downPayment.value = 0;
    }
    let finalPrice = parseFloat(priceOfVehicle.value) - parseFloat(downPayment.value); 
    console.log("Final Price: " + finalPrice);

   let calc;
    if(parseFloat(interestRate.value) <= 0){
        calc = finalPrice / loanTerm.value;
    } else {
        totalInterest =  parseFloat(interestRate.value)/1200;
        calc = ((totalInterest + (totalInterest / (Math.pow((1 + totalInterest), loanTerm.value) -1))) * finalPrice);
    }
    console.log("Calc: " + calc);
    let calcstart = parseFloat(calc) + 50;
    console.log(calcstart);

    var total = document.getElementById("totalpayment");
    total.innerHTML = "";
    animateValue(total, calcstart, calc, 750);
  

}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.setAttribute("class",'');
      obj.innerHTML = "$" + parseFloat(progress * (end - start) + start).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }