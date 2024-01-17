function generate_random(min_number, max_number) {
   // Generates a random number from min_number to max_number.
   let range = max_number - min_number;
   return min_number + Math.round(Math.random()*range);
}

let button1 = document.getElementById("button1")
button1.addEventListener("click", function(){
  let number = generate_random(0,10)
  document.getElementById("output1").innerHTML = number
})


let button2 = document.getElementById("button2")
button2.addEventListener("click", function(){
  let prefix = ["Meow","Bark","Pro","Professional","Small","Euphrates","Sly","Gaming","Toxic","Long","Foxy","Cool","Dizzy","Foggy","Foolish","Good","Hotdog","Wicked","Lacking","Sealed","Locked","Desert","Derpy","MLG_","Depressed","Black","Extinct","Expired","Blue","Different","Dirty","Clean","Flying","Rabid","Flat","Classy","Super","Discounted","Low"]
  let suffix = ["Pollo","Twizzler","Person","Master","Blaster","Con","Gamer","Bob","Frost","Boar","Snail","Dwarf","Diego","Chris","Sheep","Wasp","Octpous","Squid","Fish","River","Trout","Potato","Waffles","Jimenez","Bunay","Bunny","Rabbit","Eric","Kong","Mario","Luigi","River","Road","Roadrunner","Glass","Eagle","Discount","Ball"]
  let randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
  let randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
  document.getElementById("output2").innerHTML = randomPrefix + randomSuffix + generate_random(0,9999)
})

let button3 = document.getElementById("button3")
button3.addEventListener("click", function(){
  let output = document.getElementById("output3")
  let number = generate_random(0,10)
  if(number == 0)
    output.innerHTML = "Venera 7 (Russian: Венера-7, lit. 'Venus 7') was a Soviet spacecraft, part of the Venera series of probes to Venus. When it landed on the Venusian surface on 15 December 1970, it became the first spacecraft to soft land on another planet and the first to transmit data from there back to Earth. (Source: https://en.wikipedia.org/wiki/Venera_7)"
  if(number == 1)
    output.innerHTML = "Scientists believe that it snows metal on venus! (Source: https://en.wikipedia.org/wiki/Venus_snow)"
  if(number == 2)
  output.innerHTML = "For a while, Tetris was considered the best selling game of all time. But now, it stands in third place, with Grand Theft Auto V in second and Minecraft in first. (Source: https://en.wikipedia.org/wiki/List_of_best-selling_video_games)"
  if(number == 3)
    output.innerHTML = "There is a fourth state of matter that a lot of people seem to ignore, and that is Plasma. (Source:https://en.wikipedia.org/wiki/Plasma_(physics))"
  if(number == 4)
    output.innerHTML = "2+2=4! (Source: My brain)"
  if(number == 5)
    output.innerHTML = "The moon is not a planet (Source: Diego)"
  if(number == 6)
    output.innerHTML = "The sun is not a planet (Source: Diego)"
  if(number == 7)
    output.innerHTML = "Pluto is not a planet (Source: Diego)"
  if(number == 8)
    output.innerHTML = "More people have been to Paris than Diego. (Source: Diego)"
  if(number == 9)
    output.innerHTML = "If you close your eyes, you cant see."
  if(number == 10)
    output.innerHTML = "More people have been to Russia than Diego. (Source: Diego)"
})

let button4 = document.getElementById("button4")
button4.addEventListener("click", function(){
  let output = document.getElementById("output4")
  let number = generate_random(0,3)
  if(number == 0)
    output.innerHTML = "United States"
  if(number == 1)
    output.innerHTML = "Russia"
  if(number == 2)
  output.innerHTML = "Egypt"
  if(number == 3)
    output.innerHTML = "Germany"
})


let button5 = document.getElementById("button5")
button5.addEventListener("click", function(){
  let number = generate_random(0,5)
  let green = "#76d474"
  let orange = "#f2ca72"
  let blue = "#72a1ed"
  let red = "#ed7272"
  let purple = "#7a52bf"
  document.getElementById("div5").style.color = "#000000";
  if(number == 0)
    document.getElementById("div5").style.backgroundColor = green;
  if(number == 1)
    document.getElementById("div5").style.backgroundColor = orange;
  if(number == 2)
    document.getElementById("div5").style.backgroundColor = blue;
  if(number == 3)
    document.getElementById("div5").style.backgroundColor = red;
  if(number == 4)
    document.getElementById("div5").style.backgroundColor = purple;
  if(number == 5)
    document.getElementById("div5").style.backgroundColor = green;
})
