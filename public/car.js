
function calculation(event) 
{
    let totalInterest; 
    let totalMonthlyPayment;
    
    const priceOfVehicle = document.getElementById("priceOfVehicle").value;
    const interestRate = document.getElementById("interestRate").value;
    const loanTerm = document.getElementById("loanTerm").value;
    const downPayment = document.getElementById("downPayment").value;


    let finalPrice = priceOfVehicle - downPayment;
    totalInterest =  parseFloat(interestRate)/1200;
    
    let calc = ((totalInterest + (totalInterest / (Math.pow((1 + totalInterest), loanTerm) -1))) * finalPrice).toFixed(2);

    
    document.getElementById("totalpayment").innerHTML = "$" + calc;

    
    event.preventDefault();
}