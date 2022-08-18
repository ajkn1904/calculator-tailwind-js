function getInputValueById(btnText){
    const getBtnText = document.getElementById(btnText);
    const btnTextString = getBtnText.innerText;
    const btnValue = parseInt(btnTextString);
    return btnValue;
}
function getExpressionById(exp){
    const getBtnExp = document.getElementById(exp);
    const btnExp = getBtnExp.innerText;
    return btnExp;
}


let store = [];
const displayField = document.getElementById('display-field');



document.getElementById('equalBtn').addEventListener('click', function(){
    for(let i = 0; i<store.length; i++){
        if(store[i]=="+"){
            const sum = store[i-1]+store[i+1];
            displayField.innerText = sum;
            store = [sum];
        }
        if(store[i]=="-"){
            const minus = store[i-1]-store[i+1];
            displayField.innerText = minus;
            store = [minus];
        }
        if(store[i]=="x"){
            const into = store[i-1]*store[i+1];
            displayField.innerText = into;
            store = [into];
        }
        if(store[i]=="÷"){
            const div = store[i-1]/store[i+1];
            displayField.innerText = div;
            store = [div];
        }
    }
   
});


    let btn1 = getInputValueById('btn1');
    document.getElementById('btn1').addEventListener('click', function(){
        displayField.innerText = btn1;
        store.push(btn1);
        console.log(store);
    });


    let btn2 = getInputValueById('btn2');
    document.getElementById('btn2').addEventListener('click', function(){
    displayField.innerText = btn2;
    store.push(btn2);
    console.log(store);
    });

    let btn3 = getInputValueById('btn3');
    document.getElementById('btn3').addEventListener('click', function(){
    displayField.innerText = btn3;
    store.push(btn3);
    console.log(store);
});
   

    let btn4 = getInputValueById('btn4');
    document.getElementById('btn4').addEventListener('click', function(){
        displayField.innerText = btn4;
        store.push(btn4);
        console.log(store);
    });
    

    let btn5 = getInputValueById('btn5');
    document.getElementById('btn5').addEventListener('click', function(){
        displayField.innerText = btn5;
        store.push(btn5);
        console.log(store);
    });   
    

    let btn6 = getInputValueById('btn6');
    document.getElementById('btn6').addEventListener('click', function(){
        displayField.innerText = btn6;
        store.push(btn6);
        console.log(store);
    });   
    

    let btn7 = getInputValueById('btn7');
    document.getElementById('btn7').addEventListener('click', function(){
        displayField.innerText = btn7;
        store.push(btn7);
        console.log(store);
    });    
    

    let btn8 = getInputValueById('btn8'); 
    document.getElementById('btn8').addEventListener('click', function(){
        displayField.innerText = btn8;
        store.push(btn8);
        console.log(store);
    });  
    

    let btn9 = getInputValueById('btn9'); 
    document.getElementById('btn9').addEventListener('click', function(){
        displayField.innerText = btn9;
        store.push(btn9);
        console.log(store);
    });
    

    let btn0 = getInputValueById('btn0');
    document.getElementById('btn0').addEventListener('click', function(){
        displayField.innerText = btn0;
        store.push(btn0);
        console.log(store);
    });    
    

    
    document.getElementById('clearBtn').addEventListener('click', function(){
        displayField.innerText = '';     
    });    

       
    document.getElementById('allClearBtn').addEventListener('click', function(){
        displayField.innerText = '';
    });


    let plusBtn = getExpressionById('plusBtn');
    document.getElementById('plusBtn').addEventListener('click', function(){
        displayField.innerText = plusBtn;
        store.push(plusBtn);
        console.log(store);
       
    });    

    let minusBtn = getExpressionById('minusBtn');
    document.getElementById('minusBtn').addEventListener('click', function(){
        displayField.innerText = minusBtn;
        store.push(minusBtn);
        });    

    let intoBtn = getExpressionById('intoBtn');
    document.getElementById('intoBtn').addEventListener('click', function(){
        displayField.innerText = intoBtn;
        store.push(intoBtn);
    });    

    let divisionBtn = getExpressionById('divisionBtn');
    document.getElementById('divisionBtn').addEventListener('click', function(){
        displayField.innerText = divisionBtn;
        store.push(divisionBtn);
    });    

    
    
    


