// function for input numbers
function getInputValueById(btnText){
    const getBtnText = document.getElementById(btnText);
    const btnTextString = getBtnText.innerText;
    return btnTextString;   
}


// function for input expressions
function getExpressionById(exp){
    const getBtnExp = document.getElementById(exp);
    const btnExp = getBtnExp.innerText;
    return btnExp;
}


let store = [];
const displayField = document.getElementById('display-field');


//calculation will be done here
document.getElementById('equalBtn').addEventListener('click', function(){
    
    displayField.innerText = '';

    for(let i = 0; i<store.length; i++){
        if(store[i]=="+"){
            const sum = store[i-1]+store[store.length-1];
            displayField.innerText = sum;
            store = [sum];
        }
        if(store[i]=="-"){
            const minus = store[i-1]-store[store.length-1];
            displayField.innerText = minus;
            store = [minus];
        }
        if(store[i]=="x"){
            const into = store[i-1]*store[store.length-1];
            displayField.innerText = into;
            store = [into];
        }
        if(store[i]=="÷"){
            const div = store[i-1]/store[store.length-1];
            displayField.innerText = div;
            store = [div];
        }
    }
   
});



///////////////////calling the functions and returning the values/expressions of the buttons and displaying the value from here////////////////



let btn1 = getInputValueById('btn1');
document.getElementById('btn1').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn1;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn1;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
                displayField.innerText = displayField.innerText + btn1;
                let btn = parseFloat(displayField.innerText)
                store.push(btn);
        }
            
    }
});


let btn2 = getInputValueById('btn2');
document.getElementById('btn2').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn2;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn2;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
            {
                displayField.innerText = displayField.innerText + btn2;
                let btn = parseFloat(displayField.innerText)
                store.push(btn);
            }
    
    }
});

let btn3 = getInputValueById('btn3');
document.getElementById('btn3').addEventListener('click', function()
{    
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn3;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn3;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn3;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }
});


let btn4 = getInputValueById('btn4');
document.getElementById('btn4').addEventListener('click', function(){
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn4;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn4;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn4;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }
});


let btn5 = getInputValueById('btn5');
document.getElementById('btn5').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn5;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn5;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn5;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }
    
});   


let btn6 = getInputValueById('btn6');
document.getElementById('btn6').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn6;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn6;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn6;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }
});   


let btn7 = getInputValueById('btn7');
document.getElementById('btn7').addEventListener('click', function()
{
     if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn7;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn7;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn7;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }

});    


let btn8 = getInputValueById('btn8'); 
document.getElementById('btn8').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn8;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn8;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn8;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }
});  


let btn9 = getInputValueById('btn9'); 
document.getElementById('btn9').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') ||displayField.innerText.startsWith('x') ||displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn9;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn9;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn9;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
            
        }
    }
});


let btn0 = getInputValueById('btn0');
document.getElementById('btn0').addEventListener('click', function()
{
    if(typeof displayField.innerText === 'string')
    {
        if(displayField.innerText.startsWith('+') || displayField.innerText.startsWith('-') || displayField.innerText.startsWith('x') || displayField.innerText.startsWith('÷'))
        {
            displayField.innerText ='';
            displayField.innerText = displayField.innerText + btn0;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else if(displayField.innerText.includes('.'))
        {
            displayField.innerText = displayField.innerText + btn0;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        else
        {
            displayField.innerText = displayField.innerText + btn0;
            let btn = parseFloat(displayField.innerText)
            store.push(btn);
        }
        
    }
});  


let decimalBtn = getExpressionById('decimalBtn');
document.getElementById('decimalBtn').addEventListener('click', function()
{
    displayField.innerText = displayField.innerText + decimalBtn;
    store.push(decimalBtn); 
});


document.getElementById('clearBtn').addEventListener('click', function()
{
    displayField.innerText = '';     
});    
   


let plusBtn = getExpressionById('plusBtn');
document.getElementById('plusBtn').addEventListener('click', function()
{
    displayField.innerText = plusBtn;
    store.push(plusBtn);   
});    

let minusBtn = getExpressionById('minusBtn');
document.getElementById('minusBtn').addEventListener('click', function()
{
    displayField.innerText = minusBtn;
    store.push(minusBtn); 
});    

let intoBtn = getExpressionById('intoBtn');
document.getElementById('intoBtn').addEventListener('click', function()
{
    displayField.innerText = intoBtn;
    store.push(intoBtn);
});    

let divisionBtn = getExpressionById('divisionBtn');
document.getElementById('divisionBtn').addEventListener('click', function()
{
    displayField.innerText = divisionBtn;
    store.push(divisionBtn);
});    