


parseInt(document.getElementById("submit").onclick= function(){
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;

    let m2 =(parseFloat(height*height)/100)/100;
    console.log(m2);
    let bmiCalcule =weight  / m2;
    console.log(weight);
    console.log(height);
    console.log(bmiCalcule);

    if(bmiCalcule < 18.5){
        document.getElementById("result").innerText = 'Underweight';
    }else if (bmiCalcule >= 18.5 && bmiCalcule <= 24.9){
        document.getElementById("result").innerText = 'Normal weight';
    }else if(bmiCalcule >= 25 && bmiCalcule <= 29.9){
        document.getElementById("result").innerText = 'Overweight';
    }else if(bmiCalcule >= 30){
        document.getElementById("result").innerText = 'Obesity';
    }
});


/*
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/