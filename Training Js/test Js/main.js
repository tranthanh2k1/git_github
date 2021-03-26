const username = document.getElementById('username')
const password = document.getElementById('password')
const form_login = document.getElementById('form-login')
const un = "admin"
const pw = "123456"
// var ktra = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$";

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

  if (password.value.length < 5 || password.value.length > 10) {
    alert("Mật khẩu phải lớn hơn 5 kí tự và nhỏ hơn 10 kí tự");
    password.focus();
    return false;
  }
  if (username.value != un) {
    alert("Username hoặc Password không đúng!")
    username.focus();
    return false;
  } else if (password.value != pw) {
    alert("Username hoặc Password không đúng!")
    password.focus();
    return false;
  }
  else {
    alert("Đăng nhập thành công")
    window.location = 'https://baomoi.com/'
  }


})


// Code cho anh 1 trang đăng nhập.Có 2 ô input
//   + Username.
// + Password.
//     Có 1 button login.
// Khi click vào button login.Nếu chưa nhập thông tin thì hiển thị lỗi.
// Password check độ khó 5 - 10 ký tự.Phải có chữ hoa chữ thường và ký tự đặc biệt