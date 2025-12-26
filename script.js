const input = document.querySelector("input");
const fromUnit = document.querySelector(".from select");
const toUnit = document.querySelector(".to select");
const msg = document.querySelector(".msg p");
const btn = document.querySelector(".res");

btn.addEventListener("click", ()=>{
    const value = Number(input.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    
    if(input.value === ""){
        msg.innerText = "Please enter the temperature!";
        return;
    }

    if (from === "From" || to ==="To"){
        msg.innerText = "Please select both units";
        return;
    }

    if (from === to){
        msg.innerText = `${value} ${from} is equal to ${value} ${to}`;
        return;
    }

    let result;

    if(from === "Celsius" && to === "Fahrenheit"){
        result = (value * 9/5) + 32;
    }
    
    else if(from === "Celsius" && to === "Kelvin"){
        result = value + 273;
    }

    else if(from === "Fahrenheit" && to === "Celsius"){
        result = (value -32) * 5/9;
    }

    else if(from === "Fahrenheit" && to === "Kelvin"){
        result = (value -32) * 5/9 + 273.15;
    }

    else if(from ==="Kelvin" && to === "Celsius"){
        result = value - 273.15;
    }

    else if(from ==="Kelvin" && to ==="Fahrenheit"){
        result = (value - 273.15) * 9/5 + 32;
    }

     msg.innerText = `${value} ${from} is equal to ${result.toFixed(2)} ${to}`;

});