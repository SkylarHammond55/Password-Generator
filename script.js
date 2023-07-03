// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the password based on user prompts
function generatePassword() {
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length should be between 8 and 128 characters.");
    return "";
  }

}
