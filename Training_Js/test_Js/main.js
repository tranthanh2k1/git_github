const username = document.getElementById('username');
const password = document.getElementById('password');
const form_login = document.getElementById('form-login');
const username_error = document.getElementById('username_error');
const password_error = document.getElementById('password_error');
const un = "admin";
const pw = "Thanh@@";
var ktra = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,10}$/;

form_login.addEventListener('submit', function (e) {
  e.preventDefault();
  if (username.value === "") {
    username.style.border = '1px solid red';
    username_error.style.display = 'block';
    username.focus();
    return false;
  }

  if (password.value === "") {
    password.style.border = '1px solid red';
    password_error.style.display = 'block';
    password.focus();
    return false;
  }

  if (!ktra.test(password.value)) {
    password.style.border = '1px solid red';
    password_error.style.display = 'block';
    password.focus();
    return false;
  }

  if (username.value != un) {
    username.style.border = '1px solid red';
    username_error.style.display = 'block';
    username.focus();
    return false;
  } else if (password.value != pw) {
    password.style.border = '1px solid red';
    password_error.style.display = 'block';
    password.focus();
    return false;
  }
  else {
    alert("Đăng nhập thành công");
    window.location = 'http://127.0.0.1:5500/Training%20Js/test%20Js/thanhcong.html';
  }
})

username.oninput = function () {
  username.style.border = '1px solid #ccc';
  username_error.style.display = 'none';
}

password.oninput = function () {
  password.style.border = '1px solid #ccc';
  password_error.style.display = 'none';
}
