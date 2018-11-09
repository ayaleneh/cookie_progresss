/*'use strict'
let body=document.getElementById('bbody')
let hours = ['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm']
let address=['store1','store2','store3','store4','store5']
let cookie={
name:'COOKIES_STORE',
type:'cookies_type',
price:60,
number_of_cookie_per_customer:4,
min_number:40,
max_number:100,

customer_per_hour1:function(){
  let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
  return randomNumber 

},
customer_per_hour2:function(){
  let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
  return randomNumber 
  
},
customer_per_hour3:function(){
  let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
  return randomNumber 
  
},
customer_per_hour4:function(){
  let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
  return randomNumber 
  
},
customer_per_hour5:function(){
  let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
  return randomNumber 
  
},
}
for(let i=0;i<hours.length;i++){
console.log(cookie.customer_per_hour1())
}
console.log("store 1 end here")
for(let i=0;i<hours.length;i++){
  console.log(cookie.customer_per_hour2())
  }
  console.log("store 2 end here")
  for(let i=0;i<hours.length;i++){
    console.log(cookie.customer_per_hour3())
    }
    console.log("store 3 end here")
    for(let i=0;i<hours.length;i++){
      console.log(cookie.customer_per_hour4())
      }
    console.log("store 4 end here")
    for(let i=0;i<hours.length;i++){
      console.log(cookie.customer_per_hour5())
      }
      console.log("store 5 end here")

    

let documentsize = document.createElement('h2')
body.appendChild(documentsize)
documentsize.innerText = cookie.name
let text1=document.createElement('h2')
body.appendChild(text1)
text1.innerText='STORE 1'
//display store information into html
let elList = document.createElement('ul')
body.appendChild(elList)


for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], "Total number of customer at store 1 is "+ cookie.customer_per_hour1())
  console.log(cookie.number_of_cookie_per_customer)
  console.log("total number of cookie sold per hour is "+(cookie.customer_per_hour1()*cookie.number_of_cookie_per_customer))
  let elListItem = document.createElement('li')
  elList.appendChild(elListItem)
  elListItem.innerText = hours[i] + " number of customer at store 1 is "+(cookie.customer_per_hour1())+" and cookies sold per "+
   "hour is "+(cookie.customer_per_hour1()* (cookie.number_of_cookie_per_customer))

}
let text2=document.createElement('h2')
body.appendChild(text2)
text2.innerText='STORE 2'

let text22 = document.createElement('ul')
body.appendChild(text22)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], "Total number of customer at store 2 is "+ cookie.customer_per_hour2())
  console.log(cookie.number_of_cookie_per_customer)
  console.log("total number of cookie sold per hour is "+(cookie.customer_per_hour2()*cookie.number_of_cookie_per_customer))
  let text222 = document.createElement('li')
  text22.appendChild(text222)
  text222.innerText = hours[i] + " number of customer at store 2 is "+(cookie.customer_per_hour2())+" and cookies sold per "+
   "hour is "+(cookie.customer_per_hour2()* (cookie.number_of_cookie_per_customer))

}

let text3=document.createElement('h2')
body.appendChild(text3)
text3.innerText='STORE 3'

let text33 = document.createElement('ul')
body.appendChild(text33)

for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], "Total number of customer at store 3 is "+ cookie.customer_per_hour3())
  console.log(cookie.number_of_cookie_per_customer)
  console.log("total number of cookie sold per hour is "+(cookie.customer_per_hour3()*cookie.number_of_cookie_per_customer))
  let text333 = document.createElement('li')
  text33.appendChild(text333)
  text333.innerText = hours[i] + " number of customer at store 3 is "+(cookie.customer_per_hour3())+" and cookies sold per "+
   "hour is "+(cookie.customer_per_hour3()* (cookie.number_of_cookie_per_customer))

}




*/









  'use strict'
  let body=document.getElementById('bbody')
  let table=document.getElementById('table1')
  let store=[]
  let addition=[]
  let addition1=[]
  let addition2=[]
  let last_answer=[]
  let hours = ['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm','TOTAL']

  let cookie_store = function(name,price, number_of_cookie_per_customer, min_number, max_number) {
    this.name = name
    this.price=price
    this.number_of_cookie_per_customer =number_of_cookie_per_customer
    this.min_number = min_number
    this.max_number=max_number
  }

  cookie_store.prototype.no_of_customer_per_hour = function() {
    let randomNumber = Math.ceil(Math.random() * (this.max_number - this.min_number) + this.min_number)
    let number=randomNumber
    return number
  }
  let store1=new cookie_store("STORE_1",20,4,40,100)
  let store2=new cookie_store("STORE_2",22,4,40,100)
  let store3=new cookie_store("STORE_3",24,4,40,100)


  store.push(store1,store2,store3)
 
  let elHeader = document.createElement('tr')
  table.appendChild(elHeader)
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = 'STORE'
  for(let i = 0; i < hours.length; i++) {
    let elTh = document.createElement('th')
    elHeader.appendChild(elTh)
    elTh.innerText = hours[i]
  }
  for(let i=0;i<store.length;i++){
  let row=document.createElement('tr')
  table.appendChild(row)
  row.innerText=store[i].name
  for(let j=0;j<hours.length;j++){
    let data=document.createElement('td')
    row.appendChild(data)
    if(j<12){
    let number=data.innerText=store[i].no_of_customer_per_hour()
    if(i==0){
    addition.push(number)
    }
    if(i==1){
      addition1.push(number)
    }
    if(i==2){
      addition2.push(number)
    }
    }
    else{
      let sum=0;
      let sum1=0;
      let sum2=0;
      for(let l=0;l<addition.length;l++){
        if(i==0){
      sum=sum+addition[l]
      data.innerText=sum
        }
        if(i==1){
      sum1=sum1+addition1[l]
      data.innerText=sum1
        }
        if(i==2){
          sum2=sum2+addition2[l]
          data.innerText=sum2
        }
      }
      last_answer.push(sum)
      last_answer.push(sum1)
      last_answer.push(sum2)      

  }
}
}
  let z=addition
  console.log(z)

  let last_head = document.createElement('tr')
  table.appendChild(last_head)
  let data = document.createElement('td')
  last_head.appendChild(data)
  data.innerText = 'RESULT'
  for(let i = 0; i < hours.length; i++) {
    let next_data = document.createElement('td')
    last_head.appendChild(next_data)
    

    
    if(i==12){
      let sum=0;
      let counter=0
      while(counter<9){
        sum=sum+last_answer[counter]
      counter++
      }
      next_data.innerText=sum
    }
    else{
      next_data.innerText = addition[i]+addition1[i]+addition2[i]
    }
  }
  console.log (last_answer)



















/*for(let i=0;i<store.length;i++){
  if(i==3){
  for(let k=-1;k<hours.length;k++){
    if(k==-1){
result[k]="RESULT"
    }
   else{
   // console.log("here is the loop"+addition[k]+addition1[k]+addition2[k])
    result[k]=addition[k]+addition1[k]+addition2[k]
    console.log(result[k])
    
   }
   let last=document.createElement('td')
    table.appendChild(last)
    last.innerText=result[k]
  }
}
}
//let answer = document.createElement('tr')
//table.appendChild(answer)
//let answer_head= document.createElement('th')
//answer.appendChild(answer_head)

//answer_head.innerText = 'RESULT'

/*'use strict'

let elBody = document.getElementById('myBody')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let schools = []

let Hogwarts = {
  schoolName: 'Hogwarts',
  minStudents: 5,
  maxStudents: 20,
  spellsPerStudent: 2,
  spellsCastPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
    return randomNumber * this.spellsPerStudent
  }
}

let Beauxbatons = {
  schoolName: 'Beauxbatons',
  minStudents: 40,
  maxStudents: 100,
  spellsPerStudent: 10,
  spellsCastPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
    return randomNumber * this.spellsPerStudent
  }
}

// schools.push(Hogwarts, Beauxbatons)

//display school name in h2
let elHogwartsTitle = document.createElement('h2')
elBody.appendChild(elHogwartsTitle)
elHogwartsTitle.innerText = Hogwarts.schoolName

//display store information into html
let elList = document.createElement('ul')
elBody.appendChild(elList)


for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of spells', Hogwarts.spellsCastPerHour())
  let elListItem = document.createElement('li')
  elList.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + Hogwarts.spellsCastPerHour() + ' cast'

}

*/
