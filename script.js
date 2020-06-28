function generatePassword(){
    var numOfChar = parseInt(prompt("Enter password length. The length must be between 8 and 128 characters:"));
    

    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    
    if(numOfChar < 8 || numOfChar > 128){
        alert("Password length must be between 8 and 128 characters.");
    }

    else{
        var confirmSpecialChar = confirm("Click OK to include special characters");
        var confirmNum = confirm("Click OK to include numeric characters");
        var confirmLowercase = confirm("Click OK to include lowercase characters");
        var confirmUppercase = confirm("Click OK to include uppercase characters");

        if(confirmSpecialChar == true || confirmNum == true || confirmLowercase == true || confirmUppercase == true){
            return true;
        }

        else{
            alert("You must select at least one character type.")
        }
    }
    
}