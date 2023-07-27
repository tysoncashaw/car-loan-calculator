
function calculation(event) 
{
    let totalInterest; 
    let totalMonthlyPayment;
    
    const priceOfVehicle = document.getElementById("priceOfVehicle").value;
    const interestRate = document.getElementById("interestRate").value;
    const loanTerm = document.getElementById("loanTerm").value;
    const downPayment = document.getElementById("downPayment").value;


    // let finalPrice = priceOfVehicle - downPayment;
    // totalInterest = finalPrice * interestRate;
    // totalMonthlyPayment = (finalPrice + totalInterest) / loanTerm
    
    
    document.getElementById("totalMonthyPayment").innerHTML = "$" + priceOfVehicle;

    
    event.preventDefault();
}