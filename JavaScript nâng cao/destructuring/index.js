// Dùng destructuring đối vs mảng
// let arr = [100, 'Trần Tiến Thành', true];
// // gán id = arr[0], name = arr[1], status = arr[2]
// let [id, name, status] = arr;
// console.log(id + " - " + name + " - " + status);

// Dùng destructuring đối vs Object
// let Obj = {
//     id: 100,
//     name: "Trần Tiến Thành",
//     status: true
// }

// let { id, name, status } = Obj;


// phương thức map(): tạo ra 1 mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên từng
//                    phần tử của mảng đc gọi

// ví dụ tạo ra 1 mảng mới bằng pt map() chuyển đổi mảng chữ thường sang chữ hoa
const arr = ["Thành", "Hiếu", "Long", "Duy Anh"];
// console.log(
//     arr.map(arr1 => {
//         return arr1.toUpperCase();
//     }));

// arr.forEach(arr5 => {
//     return console.log(arr5);
// });

// phương thức filter(): tạo ra 1 mảng mới với tất cả các yếu tố mà vượt qua bài kiểm tra đc thực hiện bởi 
//                       các chức năng đc cung cấp
// console.log(
//     arr.filter(arr2 => { // dùng filter để trả về mảng mới có phần tử thỏa mãn đk
//         return arr2.includes("nh");
//     })
// );

// phương thức find(): trả về giá trị của phần tử đầu tiên trong mảng vs đk đáp ứng các quy định chức năng
//                     kiếm tra. Nếu ko có gtri nào đáp ứng chức năng kiểm tra, undefind sẽ đc trả về
// console.log(
//     arr.find(arr3 => {
//         return arr3.includes("nh"); // dùng find() để lấy phẩn tử đầu tiên đc tìm thấy thỏa mãn kí tự "nh"
//     })
// );

// Tương tự vs mảng dùng map(), filter(), find() để duyệt mảng các Object 
const obj = [
    {
        id: 1,
        name: "Trần Tiến Thành",
        status: false
    },
    {
        id: 2,
        name: "Nguyễn Duy Anh",
        status: true
    },
    {
        id: 3,
        name: "Nguyễn Văn Chiến",
        status: true
    }
]

// console.log(
//     obj.map(obj1 => { return obj1 })
// );

// console.log(
//     obj.filter(obj2 => {
//         return obj2.name.includes("nh")
//     })
// );

// console.log(
//     obj.find(obj3 => {
//         return obj3.name.includes("nh")
//     })
// );

// Arrow function và từ khóa this
const product = {
    id: 100,
    name: ["mì tôm", "bánh mì", "bim bim"],
    show: () => {
        this.name.forEch(ten => {  // this đây là gọi đến đối tượng student
            console.log(ten);
        })
    }
}
product.show();
