


//Role picker
var myArray = [
    "Pickles",
    "Nutella",
    "Peanut Butter",
    "Relish",
    "Ketchup",
    "Cheese",
    "Mayo",
    "Eggs",
    "Pepper",
    "Lettuce",
    "Ham",
    "Turkey",
    "Olives"
  ];
  
  
  
  function shit() {
    
    var food1 = myArray[Math.floor(Math.random()*myArray.length)];
    var food2 = myArray[Math.floor(Math.random()*myArray.length)];
    var food3 = myArray[Math.floor(Math.random()*myArray.length)];
    var food4 = myArray[Math.floor(Math.random()*myArray.length)];
    document.getElementById("1").innerHTML = food1;
    document.getElementById("2").innerHTML = food2;
    document.getElementById("3").innerHTML = food3;
    document.getElementById("4").innerHTML = food4;
  }