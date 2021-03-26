var $ = document.querySelector.bind(document);

// var ktra = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$";
var kt = /[a-zA-Z]/

$('#form-login').addEventListener('submit', function (e) {
  e.preventDefault(); // chặn sự kiện load trang mặc định của website
  if ($('#username').value == "") {
    // alert("Mời nhập tên đăng nhập");
    $('#username').style.border = '1px solid #FF0000';
    // return false;
  }

  if ($('#username').style.border = '1px solid #FF0000') {
    $('#username').style.border = '1px soild #000000'
  }
  // $('#username').addEventListener('change', function () {
  //   $('#username').style.display = "none";
  // })

  if ($('#password').value.length == "") {
    alert("Mời nhập mật khẩu");
    $('#password').focus();
    return false;
  }
  if ($('#password').value.length = kt) {
    alert("oke");
    $('#password').focus();
    return false;
  }
  if ($('#password').value.length < 5 || $('#password').value.length > 10) {
    alert("Mật khẩu phải lớn hơn 5 kí tự và nhỏ hơn 10 kí tự");
    $('#password').focus();
    return false;
  }

  return true;
})


/*
console.log(window.location.hash);
*/

// Code cho anh 1 trang đăng nhập.Có 2 ô input
//   + Username.
// + Password.
//     Có 1 button login.
// Khi click vào button login.Nếu chưa nhập thông tin thì hiển thị lỗi.
// Password check độ khó 5 - 10 ký tự.Phải có chữ hoa chữ thường và ký tự đặc biệt