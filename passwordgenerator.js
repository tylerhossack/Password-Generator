var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialChars = ['!','@','#','$','%','^','&','*','(',')','_','+','.',','];

function passOptions(){
    var passLength = parseInt (prompt('how long would you like your password?'));

    if (passLength < 8) {
        alert('password must be at least 8 characters');
        return;
    }

    if (passLength > 128) {
        alert('max password length is 128 characters');
        return;
    }

    var hasUpperChars = confirm('click ok to include upper case characters');

    var hasLowerChars = confirm('click ok to include lower case characters');

    var hasNumbers = confirm('click ok to include numbers');

    var hasSpecialChars = confirm('click ok to include special characters');

    if (
        hasUpperChars === false &&
        hasLowerChars === false &&
        hasNumbers === false &&
        hasSpecialChars === false
    ) {
        alert('At least one character type is required');
        return;
    }

    var passOptions = {
        passLength: length,
        hasUpperChars: hasUpperChars,
        hasLowerChars: hasLowerChars,
        hasNumbers: hasNumbers,
        hasSpecialChars: hasSpecialChars
    };
    
    return passOptions
}



