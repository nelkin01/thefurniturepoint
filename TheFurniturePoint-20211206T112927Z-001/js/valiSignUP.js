
function checkPassword(psw) {
  var strength = document.getElementById('pst');
  var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{6,}).*", "g");
  var pwd = document.getElementById("psw");
  if (pwd.value.length == 0) {
    pst.innerHTML = 'Type Password';
  } else if (false == enoughRegex.test(pwd.value)) {
    pst.innerHTML = 'More Characters';
  } else if (strongRegex.test(pwd.value)) {
    pst.innerHTML = '<span style="color:green">Strong!</span>';
  } else if (mediumRegex.test(pwd.value)) {
    pst.innerHTML = '<span style="color:orange">Medium!</span>';
  } else {
    pst.innerHTML = '<span style="color:red">Weak!</span>';
  }
}

function confirm(){
  var confi= document.getElementById('conf').value;
  var pass= document.getElementById('psw').value;
  var wrpa = document.getElementById('conpa');
  if(confi!=pass){
    alert("Passwords do not match.");
      return false;;
  }
  else{
    return true;
  }
}
