function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //check length of username (must be at least 6 characters long)
  var name_length = document.getElementById("user").innerHTML = userEntered.length;
  console.log(name_length);
  if(name_length >= 6)
  {
    //name is valid; turn username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  //check that the password entered is not "password"
  if(passEntered == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    //password is valid; turn password green
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
