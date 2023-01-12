
var passwordBtnEl = $('.btn');
var passwordDisplayEl = $('#password');

// Returns a random character that includes alphanumeric and special character values
function getPasswordChar() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGen(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordChar();
  }
  return password;
}

passwordBtnEl.on('click', function () {
  var newPassword = passwordGen(15);
  passwordDisplayEl.text(newPassword);
});
