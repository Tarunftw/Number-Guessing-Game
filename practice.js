let mysubmit=document.getElementById('guess');
let previousguesses=document.getElementById('pg');
let remainingguesses=document.getElementById('rg');
let left=3;

mysubmit.addEventListener('click',function(){

    let input=document.getElementById('myinput').value;
    let randomnumber=Math.floor(Math.random()*5+1);
    let display=document.getElementById('display');
    let result=document.getElementById('result');

    if(input=='' || input<=0 || input>=6 || isNaN(input)){
        display.innerHTML='~ Please enter valid number ~';
        result.innerHTML='';
    }
    else{
        if(input==randomnumber){
            mysubmit.disabled=true;
            mysubmit.style.opacity='0.6';
            result.style.color='green';
            result.innerHTML=`CORRECT!!!`;
        }else{
            left=left-1;
            document.getElementById('rg').innerText=left;
            if(left==0){
                document.getElementById('myinput').disabled=true;
                mysubmit.disabled=true;
            }
            previousguesses.innerHTML+=` ${input}  &nbsp `;
            document.getElementById('myinput').value='';
            document.getElementById('myinput').focus();
            result.style.color='red';
            result.innerHTML='WRONG!';
        }
    }
    
});

