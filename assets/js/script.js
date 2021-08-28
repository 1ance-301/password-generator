// generates a password
var generatePassword = function() {
  // ask for the password length
  var length = window.prompt("How many characters do you want include in the password?")

  if (length >= 8 && length <= 128) {
    console.log(length);
  } else {
    window.alert("The password needs to be between 8 and 128 characters.");

    return generatePassword();
  }
  
  // asks for character types included in the password
  var lowercase = window.confirm("Do you want to include lowercase?");
  if (lowercase === true) {
    console.log(lowercase);
  } else {
    console.log(lowercase)
  }
  var uppercase = window.confirm("Do you want to include uppercase?");
  var numbers = window.confirm("Do you want to include numbers?");
  var characters = window.confirm("Do you want to include special characters?");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
