var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //storeuserinputhere//
var password="";
  var w = prompt("Choose a number between 8 and 128");

  if (isNaN(parseInt(w))) {
    return password;
  }

  if (w < 8) {
    alert("please enter a larger number");
    return password;
  }
  else if (w > 128) {
    alert("please enter a smaller number");
    return password;
  }


  var x = confirm("Do you want numbers?")
  var y = confirm("Would you like to use uppercase letters?");
  var z = confirm("Do you want to use lowercase letters?");
  var s = confirm("Do you want to use special characters?");

  if (!x && !y && !z && !s) {
    return password;
  }

  var al = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var an = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var au = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var sc = ["~", "@", "#", "$", "%", "^", "&", "*"]

  var all = [];


  if (x) {
    all = all.concat(an)
  }

  if (y) {
    all = all.concat(au)
  }

  if (z) {
    all = all.concat(al)
  }

  if (s) {
    all = all.concat(sc)
  }

  // array consists of all characters the user wants
  // ["a","b","c",..."z",1,2,3]
  // if the user said yes to all characters
  // the array will be length 70
  // .5


  for (var i = 0; i < w; i++) {
    var pos = Math.floor(Math.random()*all.length)
    password = password+all[pos];

  }

  return password
}

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);