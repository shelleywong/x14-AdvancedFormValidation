function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //check length of username (must be at least 6 characters long)
  var name_length = document.getElementById("user").innerHTML = userEntered.length;
  console.log(name_length);

  //check that username does not contain any spaces and is at least 6 characters
  if(userEntered.search(" ") >= 0)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username cannot contain any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(name_length < 6)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  {
    //name is valid; turn username items green
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }

  //check that the password entered is not "password", not the same as the username,
  //and is 6-20 characters long
  if(passEntered.toLowerCase() == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must not be the word 'password'";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must not be the same as the username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered.length < 6 || passEntered.length > 20)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    //password is valid; turn password green
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordGroup").classList.remove("has-error");
  }
}
