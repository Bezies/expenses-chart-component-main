const submit = document.querySelectorAll(".day");
const deposit = document.querySelectorAll(".deposit");

for (let i = 0; i < deposit.length; i++) {
    submit[i].addEventListener("click", (e) => {
        fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            deposit[i].innerHTML = '$' + json[i].amount;
            deposit[i].classList.replace("deposit", "deposit-on") 
        })       
}
)}

    
    
        
