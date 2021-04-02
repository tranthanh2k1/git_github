// Xử lí bất đồng bộ trong Javascript
// Dùng Promise: Promise có 3 trạng thái:
//  + Pending(đang xử lí): trạng thái đã tạo ra promise tuy nhiên chưa được thực thi
//  + Fulfilled(resolve- đã hoàn thành): Promise đã được thực thi và return kết quả resolve().
//      Khi hàm resolve được trả về (chỉ nhận 1 giá trị duy nhất) – promise được phép gọi đến lệnh
//      .then() – để tiếp tục thực hiện logic tiếp theo
//  + Rejected(đã từ chối): Promise đã được thực thi và return kết quả reject().
//         Khi hàm reject được trả về(chỉ nhận 1 giá trị duy nhất) – promise
//         được phép gọi đến lệnh.catch() – để tiếp tục thực hiện logic tiếp theo.
//         Nếu không thực hiện hàm .catch() thì message báo lỗi sẽ chuyển thành error

// Ví dụ:
const h1 = document.querySelector('#bdb');

var diemTongKet = prompt("Nhập điểm tổng kết: ");
var time = prompt("Thời gian delay: ");

const quatrinhhoc = (totalMark, time) => {
    const promise = new Promise(  // Khởi tạo đối tượng 
        (resolve, reject) => {  // callback function nhận 2 tham số resolve, reject
            setTimeout(() => {
                if (totalMark >= 9) {
                    resolve(totalMark);  // nếu thành công
                } else {
                    reject("Không đủ điều kiện sc xuất sắc") // nếu thất bại
                }
            }, time);
        }
    )
    return promise; // trả về promise
}

quatrinhhoc(parseInt(diemTongKet), parseInt(time))
    .then(function (mark) {
        h1.innerHTML = 'Được khen thưởng, vì điểm tổng kết = ' + mark;  // trả về resolve
    })
    .catch(function (err) {
        h1.innerHTML = err; // trả về reject
    })

