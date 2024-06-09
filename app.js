let answers = []; 
answers.push(fName);
 answers.push(gender);
 var age = prompt("How old are you?");
  var ask = prompt("What do you want to order: Donuts, Coffee, Icecream, Bakery?");
  if (ask=="Donuts" || "Coffee" || "Icecream" || "Bakery")
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

