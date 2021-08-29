var alphabetLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "{", "|", "}", "~", '_',  ' ', ']', '`', "\\", '"'];

// generates a password
var generatePassword = function() {
  // ask for the password length
  var passwordLength = window.prompt("How many characters do you want include in the password?")

  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordTextLength = parseInt(passwordLength);
  } else {
    window.alert("The password needs to be between 8 and 128 characters.");

    return generatePassword();
  }
  
  // asks for character types included in the password
  var lowercase = window.confirm("Do you want to include lowercase?");
  if (lowercase === true) {
    var lowercaseInput = alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)];
  } else {
  }
  var uppercase = window.confirm("Do you want to include uppercase?");
  if (uppercase === true) {
    var uppercaseInput = alphabetUppercase[Math.floor(Math.random() * alphabetUppercase.length)];
  } else {
  }
  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) { 
    var numbersInput = numericalCharacters[Math.floor(Math.random() * numericalCharacters.length)];
  } else{
  }
  var characters = window.confirm("Do you want to include special characters?");
  if (characters) {
    var charactersInput = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  } else {
  }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.length = passwordTextLength;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
