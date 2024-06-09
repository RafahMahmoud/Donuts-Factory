let answers = []; 
answers.push(fName);
 answers.push(gender);
ل
  var ask = prompt("What do you want to order: Donuts, Coffee, Icecream, Bakery?");
  if (ask==  "Donuts" || "Coffee" || "Icecream" || "Bakery")
    {
    var order = prompt("Please,write your order");
    alert(order + " is prepared");
    console.log(fName + " " + order);
  }
  
  answers.push(ask);
  answers.push(order);
  alert(answers);
  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i]);
  }
let input = document.getElementById('input');
let paragraph = document.createElement('p');
let content0 = document.createTextNode(fName);
paragraph.appendChild(content0);
input.appendChild(paragraph);
let list = document.createElement('ol');
let listItem1 = document.createElement('li');
let content1 = document.createTextNode("Gende : " + gender);
listItem1.appendChild(content1);
list.appendChild(listItem1);
let listItem2 = document.createElement('li');
let content2 = document.createTextNode("Age : " + age);
listItem2.appendChild(content2);
list.appendChild(listItem2);
let listItem3 = document.createElement('li');
let content3 = document.createTextNode("Order : " + order);
listItem3.appendChild(content3);
list.appendChild(listItem3);
input.appendChild(list);
input.style.display="flex";
input.style.flexDirection="column";
input.style.alignItems="center";

let text = document.createElement('p');
let textContent = document.createTextNode(" Welcome, my darlings. We promise you that we will serve you the most delicious donuts, bakeries ,ice-creams and coffee as quickly as possible, 24 hours a day, 7 days a week.");
text.style.fontSize =( "x-large");
text.style.color=('black');
text.style.fontWeight=('bold');
text.style.textAlign=('center');
text.appendChild(textContent);
document.body.appendChild(text);
let first = document.getElementById("first")
first.before(text);
