



document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault(); // chặn sự kiện load trang mặc định của website
    if (document.getElementById('username').value.length == "") {
        document.getElementById('username').style.border = '1px solid #FF0000';
    }

})