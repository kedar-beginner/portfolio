function validateForm(){
  var returnval = true;

  var name = document.forms['contactform']["name"].value;
  if (name.length<3){
    alert("Name is too short");
      returnval = false;
  }

  if (name.length == 0){
      alert("Name can't be left blank")
      returnval = false;
  }

  var email = document.forms['contactform']["email"].value;
  if (email.length>30){
      alert("email is too long");
      returnval = false;
  }

  var phone = document.forms['contactform']["phone"].value;
  if (phone.length != 10){
      alert("*Phone number should be of 10 digits!");
      returnval = false;
  }

  return returnval;
}
