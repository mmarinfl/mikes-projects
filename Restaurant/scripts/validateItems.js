function validateItems() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phoneNumber = document.forms["contactForm"]["phoneNumber"].value;
  if (name == "") {
    alert("Name must be filled in");
    document.forms["contactForm"]["name"].focus();
    return false;
  }
  if (email=="") {
    alert("email must be filled in")
    document.forms["contactForm"]["email"].focus();
    return false;
  }
  alert("The information you entered is valid and will be submitted");
  return false;
}
