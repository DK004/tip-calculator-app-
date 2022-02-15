
var amountEntered = document.getElementById("amount");
var people = document.getElementById("people");
var custom = document.getElementById("custom");
var button5 = document.getElementById("5per");
var button10 = document.getElementById("10per");
var button15 = document.getElementById("15per");
var button25 = document.getElementById("25per");
var button50 = document.getElementById("50per");

var totalTip = document.getElementById("totalTip");
var perPerson = document.getElementById("perPerson");

button5.addEventListener("click",()=>{
    // percent = 5;
    custom.value = 5;
})
button10.addEventListener("click",()=>{
    // percent = 10;
    custom.value = 10;
})
button15.addEventListener("click",()=>{
    // percent = 15;
    custom.value = 15;
})
button25.addEventListener("click",()=>{
    // percent = 25;
    custom.value = 25;
})
button50.addEventListener("click",()=>{
    // percent = 50;
    custom.value = 50;
})


var reset = document.getElementById("resetBtn");
reset.addEventListener("click",()=>{
    solve();
    if(reset.innerText === "SUBMIT"){
        reset.innerText = "RESET";
    }else{
        reset.innerText = "SUBMIT";
        amountEntered.value ="";
        custom.value ="";
        people.value ="";
        perPerson.innerText = "$ 0.00";
        totalTip.innerText = "$ 0.00";
    }

})


// solve();

function solve(){
    if(people.value != '0' || people.value != null){
    bill = parseFloat(amountEntered.value);
    percent = parseFloat(custom.value);

    let calculateTip = (bill * percent)/100;
 tipPerPerson = calculateTip/5;
 tipPerPerson = tipPerPerson.toFixed(2);
 perPerson.innerText = "$ "+tipPerPerson;
 
 
    totalPerPerson = (bill + calculateTip)/5;
    totalPerPerson = totalPerPerson.toFixed(2);
    totalTip.innerText = "$ "+totalPerPerson;

}else{
    alert("Number of People cannot be 0")
}
}