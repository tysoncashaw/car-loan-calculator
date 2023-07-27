
function calculation(event) 
{
    let totalInterest; 
    let totalMonthlyPayment;
    
    const priceOfVehicle = document.getElementById("priceOfVehicle").value;
    document.getElementById("totalpayment").innerHTML = "$" + priceOfVehicle;
    event.preventDefault();
}