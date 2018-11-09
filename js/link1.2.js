'use strict'
function handler(){
  let name;
  let counter=0;
 name= prompt("hello can you enter your name?")
 console.log(name)
 alert("hello "+name+ " you can put any answer that you want")
 let m_name=prompt("Do you remeber my name if so write it? "+name)
 console.log(m_name)
 if(m_name.toLowerCase() =="ayaleneh")
 {
   alert("great job! go ahead for next question")
   console.log("great job! go ahead for next question")
   counter++;
 }
 else{
   alert("you make amistake try the next");
   console.log("you make amistake try the next")
 }
 let m_age=prompt("guess my age "+ name);
 console.log(m_age)
 if(m_age=="22"){
   alert("great..go ahead for the next question");
   console.log("great..go ahead for the next question")
   counter++;
 }
 else{
   alert("nop..try the next one");
   console.log("nop..try the next one")
 }
 let gf=prompt("do you think does i have agirl frnd")
 console.log(gf)
 if((gf=="yes")||(gf=="YES")){
   alert("nop i don't have agirl frnd yet")
   console.log("nop i don't have agirl frnd yet")
 }
 else if((gf=="no") ||(gf =="NO")){
 alert("you get it great job")
 console.log("you get it great job")
 counter++;
 }
 else {
   alert("you should enter yes or no")
 }
 let fourth=prompt("do you think am like programming")
 console.log(fourth)
 if(fourth=="yes"){
   alert("yap i like programming")
   console.log("yap i like programming")
   counter++;
 }
 else if ((fourth="no") || (fourth = "NO")){
   alert("i like programming..")
   console.log("i like programming..")
 }
 else{
   alert("you should input either yes or no")
 }
 let fifth=prompt("if you read my about me did i born in ethiopia?")
 console.log("fifth")

 if ((fifth=="yes")||(fifth=="YES")){
   alert("yap you are correct")
   console.log("yap you are correct")
   counter++;
 }
 else if((fifth=="no")||(fifth=="NO")) {
   alert("nop you make amistake")
 }
 else{
   alert("you should input either yes or no")
 }
 let chance=4
 let x  = Math.floor((Math.random() * 10) + 1);
 console.log(x)
 alert("you have 4 chance to play the next guessing game");
 for(chance=4;chance>0;chance--){
  let value=prompt("go ahead and guess anumber b/n 1 and 10")
  let number=parseInt(value,10)
  let predict=chance-1;
   if (x<number){
     alert("your guess is too high try another.. you have "+(predict) +"chance" )
     continue
   }
   else if (x>number){
     alert("your guss is too low try another ..you have "+(predict)+" chance" )
     continue
   }
   else if (x==number){
     alert("great job you get it")
     counter++;
     break
   }
 }
let country=["lowa","South Dakota"," Minnesota","Kansas","North Dakota","maryland","nework"]
  
   let count=6;
   while(count>=0){
    let answer=prompt("write astate that found central part of USA and you have "+count +" chance")
    
       if(answer.toLowerCase()=="lowa"||answer.toLowerCase()=="South Dakota"||
       answer.toLowerCase()=="Minnesota"||answer.toLowerCase()=="Kansas"||answer.toLowerCase()=="North Dakota"){
         alert("great job you get it and the possible answer is "+country[0]+" "+country[1]+" "+
         country[2]+" "+country[3]+" "+country[4])
         counter++;
         break
       }
       else
       {
         alert("keep trying you have "+count +"chance")
       }
     
   count--;
   }
   confirm("do you want to show your result?")
   if(true){
     alert("you get " +counter +" out of 6")
   }
   else{
     alert(thanks)
   }
}