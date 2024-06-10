// let answers = []; 
// answers.push(fName);
//  answers.push(gender);
//  var age = prompt("How old are you?");
//   var ask = prompt("What do you want to order: Donuts, Coffee, Icecream, Bakery?");
//   if (ask==  "Donuts" || "Coffee" || "Icecream" || "Bakery")
//     {
//     var order = prompt("Please,write your order");
//     alert(order + " is prepared");
//     console.log(fName + " " + order);
//   }
  
//   answers.push(ask);
//   answers.push(order);
//   alert(answers);
//   for (let i = 0; i < answers.length; i++) {
//     console.log(answers[i]);
//   }
// let input = document.getElementById('input');
// let paragraph = document.createElement('p');
// let content0 = document.createTextNode(fName);
// paragraph.appendChild(content0);
// input.appendChild(paragraph);
// let list = document.createElement('ol');
// let listItem1 = document.createElement('li');
// let content1 = document.createTextNode("Gende : " + gender);
// listItem1.appendChild(content1);
// list.appendChild(listItem1);
// let listItem2 = document.createElement('li');
// let content2 = document.createTextNode("Age : " + age);
// listItem2.appendChild(content2);
// list.appendChild(listItem2);
// let listItem3 = document.createElement('li');
// let content3 = document.createTextNode("Order : " + order);
// listItem3.appendChild(content3);
// list.appendChild(listItem3);
// input.appendChild(list);
// input.style.fontSize="large";
// input.style.fontWeight="bold";
// input.style.display="flex";
// input.style.flexDirection="column";
// input.style.alignItems="center";





let text = document.createElement('p');
let textContent = document.createTextNode(" Welcome, my darlings. We promise you that we will serve you the most delicious donuts, bakeries ,ice-creams and coffee as quickly as possible, 24 hours a day, 7 days a week.");
text.style.paddingTop=('50px');
text.style.fontSize =( "x-large");
text.style.color=('black');
text.style.fontWeight=('bold');
text.style.textAlign=('center');
text.appendChild(textContent);
document.body.appendChild(text);
let first = document.getElementById("first");
first.before(text);



let userForm = document.createElement("form");

let userNameL = document.createElement("label");
let content4 = document.createTextNode("User Name: ");
let username = document.createElement("input");
username.type = 'text';
username.name = 'username';
userNameL.appendChild(content4);
userForm.appendChild(userNameL);
userForm.appendChild(username);
let br =document.createElement('br');
userForm.appendChild(br);
let AgeL = document.createElement("label");
let content5 = document.createTextNode("Age: ");
let agee = document.createElement("input");
agee.type = 'text';
agee.name='agee';
AgeL.appendChild(content5);
userForm.appendChild(AgeL);
userForm.appendChild(agee);
let br1 =document.createElement('br');
userForm.appendChild(br1);
let Gender = document.createElement('p');
let content6 = document.createTextNode("Gender: ");
Gender.appendChild(content6);
userForm.appendChild(Gender);

let maleL = document.createElement("label");
let content7 = document.createTextNode("Male");
maleL.appendChild(content7);
let male = document.createElement("input");
male.type = 'radio';
male.id = 'male';
male.name = 'gender';
male.value = 'Male';
userForm.appendChild(male);
userForm.appendChild(maleL);

let femaleL = document.createElement("label");
let content8 = document.createTextNode("Female");
femaleL.appendChild(content8);
let female = document.createElement("input");
female.type = 'radio';
female.id = 'female';
female.name = 'gender';
female.value = 'Female';
userForm.appendChild(female);
userForm.appendChild(femaleL);
let br2 =document.createElement('br');
userForm.appendChild(br2);
let OrderTypeL = document.createElement("label");
let content9 = document.createTextNode("Order: ");
let OrderType = document.createElement("input");
OrderType.type = 'text';
OrderType.name = 'OrderType';
OrderTypeL.appendChild(content9);
userForm.appendChild(OrderTypeL);
userForm.appendChild(OrderType);
let br3 =document.createElement('br');
userForm.appendChild(br3);
let Check = document.createElement('p');
let content10 = document.createTextNode("Cold or hot drink?");
Check.appendChild(content10);
userForm.appendChild(Check);

let coldL = document.createElement("label");
let content11 = document.createTextNode("Cold");
coldL.appendChild(content11);
let cold = document.createElement("input");
cold.type = 'radio';
cold.id = 'cold';
cold.name = 'drink';
cold.value = 'Cold';
userForm.appendChild(cold);
userForm.appendChild(coldL);

let hotL = document.createElement("label");
let content12 = document.createTextNode("Hot");
hotL.appendChild(content12);
let hot = document.createElement("input");
hot.type = 'radio';
hot.id = 'hot';
hot.name = 'drink';
hot.value = 'Hot';
userForm.appendChild(hot);
userForm.appendChild(hotL);
let br4 =document.createElement('br');
userForm.appendChild(br4);
let Submit = document.createElement("input");
Submit.type = 'submit';
Submit.value = 'Submit';
userForm.appendChild(Submit);

document.body.appendChild(userForm);
first.after(userForm);

let userInformation = document.createElement('div');
userInformation.id = 'info';
document.body.appendChild(userInformation);

userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userForm = event.target;
    let UserName = userForm.elements['username'].value;
    let UserAge = userForm.elements['agee'].value;
    let UserGender = userForm.gender.value;
    let UserOrder = userForm.elements['OrderType'].value;
    let UserDrink = userForm.drink.value;
    let userInformation = document.getElementById('info');
    userInformation.innerHTML = "Name: " + UserName +" "
    + "Age: " + UserAge + " "
    + "Gender: " + UserGender + " "
    + "Order: " + UserOrder + " "
    + "Drink: " + UserDrink;
    
});
