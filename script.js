function generatePassword(){
    // Prompt user input for password length
    var numOfChar = parseInt(prompt("Enter password length. The length must be between 8 and 128 characters:"));

    //var numOfChar = 15;
    
    // Define character values
    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var password = "";
    var charSet = "";
    
    
    // Validating user input password length is between 8 and 128 characters
    if(numOfChar < 8 || numOfChar > 128){
        alert("Password length must be between 8 and 128 characters.");
    }

    else{
        // var confirmSpecialChar = true;
        // var confirmNum = true;
        // var confirmLowercase = false;
        // var confirmUppercase = false;

        //Confirm box for user to select character type to include in generated password
        var confirmSpecialChar = confirm("Click OK to include special characters");
        var confirmNum = confirm("Click OK to include numeric characters");
        var confirmLowercase = confirm("Click OK to include lowercase characters");
        var confirmUppercase = confirm("Click OK to include uppercase characters");
        //var random = Math.floor(Math.random() * specialChar.length);

        //Validates if user selects at least one character type
        if(confirmSpecialChar == true || confirmNum == true || confirmLowercase == true || confirmUppercase == true){

            //Conditionals to checks each of the character types if selected
            //The selected characters type will have their keys appended to a string var charSet
            if(confirmSpecialChar){
                charSet += specialChar;
            }
            if(confirmNum){
                charSet += numbers;
            }

            if(confirmLowercase){
                charSet += lowerAlphabet;
            }

            if(confirmUppercase){
                charSet += upperAlphabet;
            }



            //Loop to randomly select characters that are appended to string charset containing user selected character keys
            //Repeats the based on user input for number of characters desired
            for(var i = 0; i < numOfChar; i++){
                if(confirmSpecialChar){
                    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
                }

                // if(confirmNum){
                //     password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                // }
                //console.log(password);
            }
            document.getElementById("TextArea").value = password
            
        }

        else{
            alert("You must select at least one character type.");
        }
    }
    console.log(password);
}


function copyPassword(){
    var copyText = document.getElementById("TextArea");
    copyText.select();
    document.execCommand("copy"); 
    alert(`Your password, ${copyText.value} was copied to your clipboard.`);

}

//generatePassword();