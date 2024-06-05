let fName = prompt("Please,enter your name");
function welcoming(a) {
    alert("Welcome " + a + fName);
}
while(true){
      var gender = prompt("Please,enter your gender: male or female");
      if (gender == "male") {
        welcoming("Mr. ")
      
        break;
      } else if (gender == "female") {
        welcoming("Ms. ")
        break;
      }
    }
