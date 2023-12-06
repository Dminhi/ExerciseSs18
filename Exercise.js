// 1.
// Tạo một mảng products để lưu trữ các đối tượng product bao gồm các thông tin:
// productId, productName, price, image, description, createdAt. Thực hiện các yêu cầu sau đây:
// Hiển thị danh sách sản phẩm
// Thêm mới sản phẩm vào trong mảng (Kiểm tra dữ liệu đầu vào, id của sản phẩm không được trùng.
// Nếu trùng thì báo cho người dùng biết là “Id không được phép trùng”, ngày thêm phải format đúng định dạng khi thêm mới)
// Tìm kiếm sản phẩm theo tên
// Sắp xếp sản phẩm tăng dần theo giá
// Lọc ra những sản phẩm có giá lớn hơn 100.000đ

// const products = [{
//     productId: 1,
//     productName: "Minh",
//     price: 2000,
//     image: "image",
//     description: "description1",
//     createdAt:

// }, ];

// Khởi tạo mảng products để lưu trữ các sản phẩm
// const formatTime = (date) => {
//     const currentDate = new Date(date);

//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth() + 1;
//     const day = currentDate.getDate();

// Format lại để có chuỗi định dạng YYYY-MM-DD
//     return `${year}/${month < 10 ? "0" + month : month}/${
//     day < 10 ? "0" + day : day
//   }`;
// };

// let products = [{
//         productId: 1,
//         productName: "Product 1",
//         price: 150000,
//         image: "image1.jpg",
//         description: "Description 1",
//         createdAt: formatTime(new Date()),
//     },
//     {
//         productId: 2,
//         productName: "Product 2",
//         price: 90000,
//         image: "image2.jpg",
//         description: "Description 2",
//         createdAt: formatTime(new Date()),
//     },
// ];

// Hiển thị danh sách sản phẩm
// function displayProducts() {
//     console.log("Danh sách sản phẩm:");
//     products.forEach(function(product) {
//         console.log(product);
//     });
// }

// Thêm mới sản phẩm
// function addProduct(newProduct) {
//     // Kiểm tra xem productId có trùng không
//     const isDuplicate = products.some(
//         (product) => product.productId === newProduct.productId
//     );
//     if (isDuplicate) {
//         console.log("Id không được phép trùng");
//         return;
//     }

// Kiểm tra và format ngày thêm mới sản phẩm
//     const currentDate = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại theo định dạng YYYY-MM-DD
//     newProduct.createdAt = currentDate;

//     products.push(newProduct);
//     console.log("Sản phẩm mới đã được thêm vào danh sách.");
// }

// Tìm kiếm sản phẩm theo tên
// function searchProductByName(productName) {
//     const foundProducts = products.filter((product) =>
//         product.productName.toLowerCase().includes(productName.toLowerCase())
//     );
//     console.log("Kết quả tìm kiếm:");
//     console.log(foundProducts);
// }

// Sắp xếp sản phẩm tăng dần theo giá
// function sortProductsByPrice() {
//     const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
//     console.log("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần:");
//     console.log(sortedProducts);
// }

// Lọc ra những sản phẩm có giá lớn hơn 100.000đ
// function filterProductsByPrice() {
//     const filteredProducts = products.filter((product) => product.price > 100000);
//     console.log("Những sản phẩm có giá lớn hơn 100.000đ:");
//     console.log(filteredProducts);
// }

// // Sử dụng các hàm để thực hiện các yêu cầu cần thiết
// displayProducts(); // Hiển thị danh sách sản phẩm

// Thêm sản phẩm mới (ví dụ)
// addProduct({
//     productId: 3,
//     productName: "Product 3",
//     price: 120000,
//     image: "image3.jpg",
//     description: "Description 3",
//     createdAt: "2023-12-01", // Format: YYYY-MM-DD
// });

// searchProductByName("Product 2"); // Tìm kiếm sản phẩm theo tên

// sortProductsByPrice(); // Sắp xếp sản phẩm tăng dần theo giá

// filterProductsByPrice(); // Lọc ra sản phẩm có giá lớn hơn 100.000đ

// Bài 2:
// Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường sau:
//  userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:
// Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn hơn 8 ký tự, format ngày tháng)
// Hiển thị danh sách user trong màn hình console.log()
// Thực hiện chức năng tìm kiếm user theo tên hoặc email
// Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email và password.
//  Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”.
// Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”

// const formatTime = (date) => {
//     const currentDate = new Date(date);

//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth() + 1;
//     const day = currentDate.getDate();

//     return `${year}/${month < 10 ? "0" + month : month}/${
//     day < 10 ? "0" + day : day
//   }`;
// };

// const users = [];
// const inputEmail = prompt("Nhập email");
// const inputPassword = prompt("Nhập password");

// const checkEmail = ()=>{inputEmail.test()}

// const checkPassword = () => {
//     if (inputPassword.length < 8) {
//         return;
//     } else {
//         return inputPassword;
//     }
// };

// function User(userId, userName, gender, email, password, createdAt) {
//     this.userId = userId;
//     this.userName = userName;
//     this.gender = gender;
//     this.email = email;
//     this.password = password;
//     this.createdAt = createdAt;
// }
// const user1 = new User(
//     1,
//     "Minh",
//     "Nam",
//     isValidEmail(inputEmail),
//     checkPassword(inputPassword),
//     formatTime(new Date())
// );
// users.push(user1);

// console.log(users);
const products = [];

const handleAddProduct = () => {
    let productId = +prompt("Nhập ID sản phẩm");
    let productName = prompt("Nhập tên sản phẩm");
    let price = prompt("Nhập giá sản phẩm");
    let image = prompt("Nhập ảnh sản phẩm");
    let description = prompt("Nhập chi tiết sản phẩm");

    // Tạo đối tượng product
    const newProduct = {
        productId: productId,
        productName: productName,
        price: price,
        image: image,
        description: description,
        createdAt: new Date().toISOString().split("T")[0],
    };
    products.push(newProduct);
};
// push đối tượng vào trong mảng

const handleLoadData = () => {
    if (products.length === 0) {
        console.log("Không có sản phẩm nào");
    } else {
        products.forEach((item) => console.log(item));
    }
};

const handleSearchByName = () => {
    const searchValue = prompt("Nhập tên sản phẩm cần tìm kiếm: ");
    const findProduct = products.find((pro) => pro.productName === searchValue);

    if (!findProduct) {
        return `Không tìm thấy sản phẩm ${searchValue}`;
    } else {
        return findProduct;
    }
};

const handleSortByPrice = (type) => {
    if (type === "down") {
        products.sort((a, b) => {
            return b.price - a.price;
        });
    } else {
        products.sort((a, b) => {
            return a.price - b.price;
        });
    }
    handleLoadData();
};

const handleFilterByPrice = () => {
    const filterProductsByPrice = products.filter((pro) => pro.price >= 100000);
    if (filterProductsByPrice.length === 0) {
        return "Không có sản phẩm nào";
    } else {
        return filterProductsByPrice;
    }
};

// Bài 2:

const users = [];
/**
 * Validate địa chỉ email
 * @param {*} email nhập từ client
 * @returns trả về một chuỗi định dạng nếu email hợp lệ, không trả về dữ liệu nếu email k hợp lệ
 */
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateData = (email, password) => {
    let error = [];
    if (!validateEmail(email)) {
        error.push("Email không đúng định dạng");
    } else if (password.length < 8) {
        error.push("Mật khẩu phải lớn hơn 8 ký tự.");
    }

    if (error.length > 0) {
        return error;
    } else {
        return true;
    }
};
const createUser = () => {
    // Lấy dữ liệu từ phía client
    let userID = +prompt("Nhập Id user: ");
    let userName = prompt("Nhập tên: ");
    let gender = prompt("Nhập giời tính: ");
    let address = prompt("Nhập địa chỉ: ");
    let email = prompt("Nhập email: ");
    let password = prompt("Nhập mật khẩu: ");

    const newUser = {
        userID: userID,
        userName: userName,
        gender: gender,
        address: address,
        email: email,
        password: password,
        createdAt: new Date().toISOString().split("T")[0],
    };

    let isValid = validateData(email, password);

    if (isValid.length > 0) {
        console.log(isValid);
    } else {
        user.push(newUser);
    }
};

const hanleLoadUser = () => {
    if (users.length === 0) {
        console.log("Chưa có tài khoản nào");
    } else {
        users.forEach((user) => console.log(user));
    }
};
/**
 *
 * @param {*} userName
 * @returns
 */
const hanleSearchUser = (userName) => {
    const findByUserName = user.filter((user) => user.userName === userName);

    if (findByUserName.length === 0) {
        return "Không tìm thấy kết quả";
    } else {
        return findByUserName;
    }
};
const hanleLogIn = (email, password) => {
    if (!email || !password) {
        return "email và password không được phép để trống";
    } else {
        const findUserByEmail = users.find((user) => user.email === email);
        if (!findUserByEmail) { return "Email hoặc mật khẩu không đúng" } else { if (findUserByEmail.email === email && findByUserName === userName) }
    }
};