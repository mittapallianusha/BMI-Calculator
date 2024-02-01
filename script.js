document.addEventListener('DOMContentLoaded', function () {
    let metricUnit = document.getElementById("metric");
    let usUnit = document.getElementById("us");
    let unitLabelEl = document.getElementById("weight1");
    let heightLabelEl=document.getElementById("height1");
    let unit;
    let resultEl=document.getElementById("result");
    let bmiTableEl=document.getElementById("bmiTable");
    let resultImageEl=document.getElementById("resultImage");
    let imageDisplayEl=document.getElementById("imageDisplay");

    metricUnit.onclick=function(){
        unitLabelEl.value="";
        heightLabelEl.value="";
        resultEl.value="";
        bmiTableEl.style.display="flex";
        resultImageEl.style.display="none";
        unitLabelEl.placeholder="Enter weight in KG's";
        heightLabelEl.placeholder="Enter height in CM's";
        unitLabelEl.style.fontStyle="italic";
        unit="metric";
    }
    usUnit.onclick=function(){     
        unitLabelEl.value="";  
        heightLabelEl.value=""; 
        resultEl.value="";
        bmiTableEl.style.display="flex";
        resultImageEl.style.display="none";
        unitLabelEl.placeholder="Enter weight in LB's";
        heightLabelEl.placeholder="Enter height in IN's";
        unitLabelEl.style.fontStyle="italic";
        unit="us";
    }

    let btnEl=document.getElementById("btn");
    btnEl.onclick=function(){
        imageDisplayEl.classList.remove("result-image");
        let weight=parseInt(unitLabelEl.value);
        let height=parseInt(heightLabelEl.value);
        let bmi;
        if(unit === undefined || isNaN(weight) || isNaN(height) || weight<=0 || height <= 0){
            alert("Invalid Input. Please provie valid inputs and select the correct units");
        }
        if(unit==="metric"){
            bmi =Math.ceil(weight / Math.pow(height / 100, 2));
        }
        else{
            bmi = Math.ceil((weight / Math.pow(height, 2)) * 703);
        }
        resultEl.value=bmi;
        bmiTableEl.style.display="none";
        resultImageEl.style.display="flex";
        if(bmi <= 19){
            resultImageEl.src = "thin.png";
        }
        else if(bmi >= 20 && bmi <= 30){
            resultImageEl.src="healthy.png";
        }
        else{
            resultImageEl.src="overweight.png";
        }
    }
});
