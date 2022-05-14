/// Assignment code here

const selections = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordselection = "";

  var pwlength = window.prompt("Please input a number between 8 and 128")

  var lcase = window.confirm("Include lowercase?")
  if (lcase) {
    passwordselection += selections.lowercase;
  };

  var ucase = window.confirm("Include uppercase?")
  if (ucase) {
    passwordselection += selections.uppercase;
  };

  var numbers = window.confirm("Include numbers?")
  if (numbers) {
    passwordselection += selections.number;

  };

  var symbols = window.confirm("Include special characters?")
  if (symbols) {
    passwordselection += selections.symbol;

  };

  var password = "";
  for (let i = 0; i < pwlength; i++) {
    password += passwordselection[Math.floor(Math.random() * passwordselection.length)]
  
  }
  // alert(password)
  document.querySelector("#password").textContent = password;

}



