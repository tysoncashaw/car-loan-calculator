
function calculation(event) 
{
    let totalInterest; 
    let totalMonthlyPayment;
    
    const priceOfVehicle = document.getElementById("priceOfVehicle").value;
    const interestRate = document.getElementById("interestRate").value;
    const loanTerm = document.getElementById("loanTerm").value;
    const downPayment = document.getElementById("downPayment").value;


    let finalPrice = priceOfVehicle - downPayment;
    totalInterest = finalPrice * interestRate;
    principalPayment = (finalPrice * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    pmt = principalPayment + totalInterest;
    

    // totalMonthlyPayment = (finalPrice + totalInterest) / loanTerm
    
    
    document.getElementById("totalpayment").innerHTML = "$" + pmt;

    
    event.preventDefault();
}