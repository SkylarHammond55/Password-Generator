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
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type should be selected.");
    return "";
  }

  // Define character pools based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

  // Create the character pool based on selected criteria
  var characterPool = "";
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeNumeric) {
    characterPool += numericChars;
  }
  if (includeSpecial) {
    characterPool += specialChars;
  }

}
