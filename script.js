function generatePassword() {
	// Prompt user input for password length
	var numOfChar = parseInt(prompt("Enter password length. The length must be between 8 and 128 characters:"));



	// Define character values
	var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
	var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
	var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";

	//String storing generated password
	var password = "";

	//String for storing character keys based on user choice for included characters in password
	var charSet = "";

    //Check if prompt is not a number, else the program continues with further validation
    if(isNaN(numOfChar)){
        alert("You must enter a password length.");
    }
    
    else{
        // Validating user input password length is between 8 and 128 characters
        if (numOfChar < 8 || numOfChar > 128) {
            alert("Password length must be between 8 and 128 characters.");
        } else {

            //Confirm box for user to select character type to include in generated password
            var confirmSpecialChar = confirm("Click OK to include special characters");
            var confirmNum = confirm("Click OK to include numeric characters");
            var confirmLowercase = confirm("Click OK to include lowercase characters");
            var confirmUppercase = confirm("Click OK to include uppercase characters");




            //Validates if user selects at least one character type
            if (confirmSpecialChar === true || confirmNum === true || confirmLowercase === true || confirmUppercase === true) {

                //Conditionals to checks each of the character types if selected
                //The selected characters type will have their keys appended to a string var charSet
                if (confirmSpecialChar) {
                    charSet += specialChar;
                }
                if (confirmNum) {
                    charSet += numbers;
                }

                if (confirmLowercase) {
                    charSet += lowerAlphabet;
                }

                if (confirmUppercase) {
                    charSet += upperAlphabet;
                }



                //Loop to randomly select characters that are appended to string charset containing user selected character keys
                //Repeats the based on user input for number of characters desired
                for (var i = 0; i < numOfChar; i++) {
                    password += charSet.charAt(Math.floor(Math.random() * charSet.length));



                }

                //Takes value of TextArea and assigns it the value of string password
                //So password can be displayed to user
                document.getElementById("TextArea").value = password;

            } else {
                alert("You must select at least one character type.");
            }
        }
    }    

}

//Function for copying password to clipboard
function copyPassword() {
	var copyText = document.getElementById("TextArea");
	copyText.select();
	document.execCommand("copy");
	alert("Your password, " + copyText.value + " was copied to your clipboard.");

}