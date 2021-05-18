// Sự kiện trong Jquery
// $(document).ready(): xảy ra đầu tiên khi DOM đc load xong
// $(window).load(): xảy ra khi tất cả các DOM và toàn bộ nội dung của trang đc tải xong
// Cú pháp: $(selector).action()

// Seclector: $('tên của phần tử - viết theo kiểu css)
// Event trong Jquery:
// Mouse Events(Sự kiện liên quan đến chuột): click, dbclick, mouseenter, mouseleave
// Keyboard Events(Sự kiện liên quan đến bàn phím): keypress, keydown, keyup
// Form Events(Sự kiện liên quan đến form): submit, change focus, blur
// Document/Windown Events: load, resize, scroll, unload

// Hiệu ứng trong Jquery
// hide(): ẩn
// show(): hiện
// toggle(): ẩn/hiện
// Jquery Fade: làm mờ
//  + fadeIn(): làm mờ 1 phần tử ấn
//  + fadeOut(): làm mờ phần tử hiển thị
//  + fadeToggle(): chuyển đổi giữa fadeIn() và fadeOut()
// Jquery Slide: trượt các phần tử lên xuống
//  + slideDown(): trượt xuống 1 phần tử
//  + slideUp(): trượt lên 1 phần tử
//  + slideToggle(): chuyển đổi giữa slideDown() và slideUp()
// Jquery Animate: tạo hoạt ảnh tùy chỉnh
// Ví dụ: Hiệu ứng trong Jquery
// $(document).ready(function () {
//     $('button').click(function () {
//         $('#div1').fadeToggle();
//         $('#div2').fadeToggle("show");
//         $('#div3').fadeToggle(3000);
//     })
// })

// Jquery HTML
// html(): đặt và trả về nội dung (innerHTML) của các phần tử đã chọn
// val(): lấy giá trị của thẻ input, select, textarea
// append(): chèn nội dung vào phần tử đã chọn
// prepend(): chèn nội dung vào đầu phần tử đã chọn
// after():  chèn nội dung sau các phần tử đã chọn
// before(): chèn nội dung trc các phần tử đã chọn
// remove():  loại bỏ phần tử đã chọn(và các phần tử con của nó)
// empty(): loại bỏ các phẩn tử con khỏi phần tử đã chọn
// css(): đặt hoặc trả về thuộc tính style
// ví dụ: 
$(document).ready(function () {
    $('button').click(function () {
        $('#div1').css({ 'background-color': 'yellow', 'height': '200px' });
        $('#div2').fadeToggle("show");
        $('#div3').fadeToggle(3000);
    })
})
