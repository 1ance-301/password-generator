// array of possible characters
var alphabetLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "{", "|", "}", "~", '_',  ' ', ']', '`', "\\", '"'];

// variables for parameters
var lowercase;
var uppercase;
var numbers;
var characters;
var passwordLength = "";

// function to generate password
function generatePassword() {
  // asks for password length
  var passwordLength = window.prompt("How many characters do you want include in the password?")
  if (passwordLength <= 8 || passwordLength >= 128) { 
    window.alert("The password needs to be between 8 and 128 characters.");

    return generatePassword();
  };

  // array of possible characters
  var passwordChar = []
  
  // asks for character types included in the password
  var lowercase = window.confirm("Do you want to include lowercase?");
  if (lowercase) {
    // allows lowercase characters input
    passwordChar = passwordChar.concat(alphabetLowercase);
  }
    
  var uppercase = window.confirm("Do you want to include uppercase?");
  if (uppercase) {
    // allows uppercase characters input
    passwordChar = passwordChar.concat(alphabetUppercase);
  }

  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) {
    // allows number characters input
    passwordChar = passwordChar.concat(numericalCharacters);
  }
    
  var characters = window.confirm("Do you want to include special characters?");
  if (characters) {
    // allows special characters input
    passwordChar = passwordChar.concat(specialCharacters);
  }

  var password = ""

  for (i=0; i < passwordLength; i++ ) {
    password = password + passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);