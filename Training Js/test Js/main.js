const username = document.getElementById('username');
const password = document.getElementById('password');
const form_login = document.getElementById('form-login');
const un = "admin";
const pw = "Thanh@@";
var ktra = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,10}$/;

form_login.addEventListener('submit', function (e) {
  e.preventDefault();
  if (username.value === "") {
    alert("Mời nhập tên đăng nhập");
    username.focus();
    return false;
  }

  if (password.value.length == "") {
    alert("Mời nhập mật khẩu");
    password.focus();
    return false;
  }

  if (!ktra.test(password.value)) {
    alert("Mật khẩu phải có chứ hoa chữ thường kí tự đặc biệt và ko vượt quá từ 5 đến 10 kí tự");
    password.focus();
    return false;
  }

  if (username.value != un) {
    alert("Username hoặc Password không đúng!");
    username.focus();
    return false;
  } else if (password.value != pw) {
    alert("Username hoặc Password không đúng!");
    password.focus();
    return false;
  }
  else {
    alert("Đăng nhập thành công");
    window.location = 'http://127.0.0.1:5500/Training%20Js/test%20Js/thanhcong.html';
  }
})
