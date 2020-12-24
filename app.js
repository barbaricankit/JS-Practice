// let userName=prompt("What is your name?");
// alert("Logined user name is "+userName);
let inputBox=document.querySelector('textarea[id="inputTextBox"]')
let btn=document.querySelector("#btnClick");
let outputBox=document.querySelector('#outputTextBox')
const days=[0,31,28,31,30,31,30,31,31,30,31,30,31]
// console.log(outputBox)
// btn.addEventListener("click",function click(){

    
//     outputBox.innerText ="Username is "+inputBox.value;
// })
const regex=/^\d{2}\/*\d{2}$/
const checkPrime=()=>{

    let birthDate=inputBox.value;
    let birthDay=birthDate.substring(0,2)
    let birthMonth;
    if(birthDate.includes("/"))
     birthMonth=birthDate.substring(3,5);
    else
    birthMonth=birthDate.substring(2,4)
    
    let outputText="";
    if(birthDate==="")
    outputText="Please enter a date";
        else if(!regex.test(birthDate))
        outputText="Invalid Format! Please enter a valid date format(DDMM or DD/MM)";
        else if(birthMonth>12)
        outputText="Invalid Month! Please enter a valid month";
        else if(birthDay>days[birthMonth])
        outputText="Invalid Date! Please enter a valid date";
        else{
            let count=0;
            for(let i=2;i<birthDay;i++)
            {
                if(birthDay%i==0)
                count++;
            }
            if(count==0)
            outputText="Your birthday is a prime number"
            else
            outputText="Your birthday is not a prime number"
        }
        outputBox.innerText=outputText;
}
btn.addEventListener("click",checkPrime)