function validateForm(e) {
  e.preventDefault();
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let email=document.forms["myForm"]["email"].value;
    var mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailFormat.test(email)){
        return true;
    }
    else{
        alert("enter valid email id");
        return false;
    }
  }