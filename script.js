// Assignment Code to associate the generate id with the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Here is where we are getting the length of the passwor from the user. 
  var length = prompt("Passwords must be between 8 and 128 characters. Please enter a number between 8 and 128.");
  while (length < 8  || length > 128){
    var length = prompt("Please enter between 8 and 128 characters");
  }
  
  // Here is where are are gathering which type of characters to include in our password. 
  var number = confirm("Do you want to include numbers?");
  var special = confirm("Do you want to include special characters?");
  var lower = confirm("Do you want to include lower case characters?");
  var upper = confirm("Do you want to include Upper Case characters?");

  //testing console logs below. 
  console.log("number: " + number);
  console.log("special: " + special);
  console.log("lower: " + lower);
  console.log("upper: " + upper);

// the following is calling the generate Password function. 
  var password = generatePassword();

  // this is putting whatever is returned from the generatePassword function into the passwordText variable to be displayed in the "text area"
  var passwordText = document.querySelector("#password");
  passwordText.value = password;



    // Here is my function to generate the password. 
    function generatePassword(){

      //establishing variables. 
      var passwordString = "";
      var password = "";
      var numbers = "0123456789"; 
      // Need to add more special characters
      var specials = "@!#$%^&*()_+"; 
      var lowers = "abcdefghijklmnopqrstuvwxyz"; 
      var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
      
      //if else statements to build a string based on the user input. 
      //I would be so happy if I had the knowledge to build a map and figure out neighbors and nodes.
      //but alas I'm not that knowledgeable in javascript yet. 
      if ((number == true) && (special == false) && (lower == false) && (upper == false)){
        passwordString += numbers;
      }else if ((number == true) && (special == true) && (lower == false) && (upper == false)){
        passwordString += numbers += specials;
      } else if((number == true) && (special == true) && (lower == true) && (upper == false)){
        passwordString += numbers += specials += lowers;
      }else if ((number == false) && (special == false) && (lower == false) && (upper == true)){
        passwordString += uppers;
      }else if ((number == false) && (special == false) && (lower == true) && (upper == true)){
        passwordString += lowers += uppers;
      }else if ((number == false) && (special == true) && (lower == false) && (upper == false)){
        passwordString += specials;
      }else if ((number == false) && (special == false) && (lower == true) && (upper == false)){
        passwordString += lowers;
       }else if ((number == true) && (special == false) && (lower == false) && (upper == true)){
         passwordString += numbers += uppers;
      }else if ((number == false) && (special == true) && (lower == true) && (upper == false)){
        passwordString += lowers += specials;
      }else if ((number == false) && (special == true) && (lower == true) && (upper == false)){
        passwordString += lowers += specials += uppers;
      }else if ((number == false) && (special == true) && (lower == true) && (upper == false)){
        passwordString += numbers += specials += uppers;
      }else if ((number == true) && (special == false) && (lower == true) && (upper == true)){
        passwordString += numbers += lowers += uppers;
     }else{
        passwordString += numbers += specials += lowers += uppers;
      }

      //testing to see how we have built our string. 
      console.log("passwordString: " + passwordString);

      //Loop that will loop the password length that we retrieved from the user. 
      for (var i =0; i < length; i++){

          //random number. Set to the length of our built string.  
        var j = Math.floor(Math.random() * passwordString.length);

        //Selecting that character and building my string with it. 
        var k = passwordString.charAt(j);

        //var l = uppercase.charAt(j);
      
        console.log(k);
        // this is the password that will be returned to the main function. 
        password += k; 
        

      }
      //returning the password
      return password;
    }
    console.log("password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
