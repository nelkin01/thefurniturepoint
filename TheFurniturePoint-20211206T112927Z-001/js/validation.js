function loginCheck() {
  var uname = document.getElementById("uname").value;
  var pwd = document.getElementById("pass").value;
  if(uname =='')
    {
      alert("please enter user name.");
    }
    else if(pwd=='')
    {
          alert("enter the password");
    }
    else if(pwd.length < 6 || pwd.length > 16)
    {
      alert("Password min is 6 and max length is 16.");
    }
    else
    {
  alert('Thank You for Login & You are Redirecting to the home page');
       window.location.href = "index.php";
      }
  }



