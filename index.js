//Bài 1
/**
 * Đầu vào:
 * lấy input vào các biến diemChuan, khuVuc, doiTuong, monThu1, monThu2, monThu3
 * tạo biến ketQua để xuất kết quả đậu hay rớt
 * tạo biến diemTong để tính tổng số điểm
 * tạo biến result1 để xuất kết quả đẩu ra
 *
 * Xử lý:
 * xét khu vực qua switch case để cộng thêm vào diemTong
 * xét đối tượng ưu tiên qua switch case để cộng thêm vào diemTong
 * cộng thêm điểm của 3 môn vào diemTong
 * xét diemTong >= diemChuan và điểm các môn khác 0 thì đậu, còn lại là rớt
 *
 * Đầu ra:
 * xuất kết quả đậu hay rớt và tổng điển
 */

document.getElementById("ketQua").onclick = function () {
  //Đầu vào:
  let diemChuan = +document.getElementById("diemChuan").value;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = +document.getElementById("doiTuong").value;
  let monThu1 = +document.getElementById("monThu1").value;
  let monThu2 = +document.getElementById("monThu2").value;
  let monThu3 = +document.getElementById("monThu3").value;
  let ketQua = "";
  let diemTong = 0;
  let result1 = document.getElementById("result1");

  //Xử lý:
  switch (khuVuc) {
    case "A":
      diemTong += 2;
      break;
    case "B":
      diemTong += 1;
      break;
    case "C":
      diemTong += 0.5;
      break;
    default:
      break;
  }

  switch (doiTuong) {
    case 1:
      diemTong += 2.5;
      break;
    case 2:
      diemTong += 1.5;
      break;
    case 3:
      diemTong += 1;
      break;
    default:
      break;
  }

  diemTong += monThu1 + monThu2 + monThu3;
  if (
    diemTong >= diemChuan &&
    monThu1 !== 0 &&
    monThu2 !== 0 &&
    monThu3 !== 0
  ) {
    ketQua += "Đậu";
  } else {
    ketQua += "Rớt";
  }

  //Đầu ra:
  result1.style.display = "block";
  result1.innerHTML = ketQua + " và có tổng điểm là: " + diemTong;
};

//Bài 2:
/**
 * Đầu vào:
 * lấy giá trị input vào các biến name và dienTieuThu
 * tạo biến tienDien là tổng số tiền điện cần thanh toán của khách hàng
 * tạo biến result2 để xuất kết quả đầu ra
 *
 * Xử lý:
 * nếu dienTieuThu <= 50 thì tienDien += 500 * dienTieuThu;
 * nếu dienTieuThu > 50 && dienTieuThu <= 100 thì tienDien += 500 * 50 + 650 * (dienTieuThu -50);
 * nếu dienTieuThu > 100 && dienTieuThu <= 200 thì tienDien += 500 * 50 + 650 * 50 + 850 * (dienTieuThu -100);
 * nếu dienTieuThu > 200 && dienTieuThu <= 350 thì tienDien += 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (dienTieuThu - 200);
 * trường hợp còn lại thì tienDien += 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (dienTieuThu - 350);
 *
 * Đầu ra:
 * xuất ra số tiền điện phải trả
 */

document.getElementById("tinhTienDien").onclick = function () {
  //Đầu vào:
  let name = document.getElementById("name").value;
  let dienTieuThu = +document.getElementById("dienTieuThu").value;
  let result2 = document.getElementById("result2");
  let tienDien = 0;

  //Xử lý:
  if (dienTieuThu <= 50) {
    tienDien += 500 * dienTieuThu;
  } else if (dienTieuThu > 50 && dienTieuThu <= 100) {
    tienDien += 500 * 50 + 650 * (dienTieuThu - 50);
  } else if (dienTieuThu > 100 && dienTieuThu <= 200) {
    tienDien += 500 * 50 + 650 * 50 + 850 * (dienTieuThu - 100);
  } else if (dienTieuThu > 200 && dienTieuThu <= 350) {
    tienDien += 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (dienTieuThu - 200);
  } else {
    tienDien +=
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (dienTieuThu - 350);
  }

  //Quy đổi VND:
  let currentFormat = new Intl.NumberFormat("vn-VN");

  //Đầu ra:
  result2.style.display = "block";
  result2.innerHTML =
    "Tên khách hàng: " +
    name +
    "; Tiền điện: " +
    currentFormat.format(tienDien);
};

//Bài 3:
/**
 * Đầu vào:
 * lấy giá trị input vào các biến name3, tongThu, nguoiPhuThuoc
 * tạo biến result3 để xuất kết quả đầu ra
 * tạo biến thuChiuThue để tính số thu nhập chịu thuế
 * tạo biến tienThue là số tiền thuề cần phải đóng
 * 
 * Xử lý:
 * tính thuChiuThue theo đề bài cho:
 * thuChiuThue += tongThu - 4e+6 - nguoiPhuThuoc * 1.6e+6;
 * sau đó xét từng khoảng để tính % thuế:
  if (thuChiuThue > 0 && thuChiuThue <= 60e+6) {
    tienThue += thuChiuThue * 0.05;
  } else if (thuChiuThue > 60e+6 && thuChiuThue <= 120e+6) {
    tienThue += thuChiuThue * 0.1;
  } else if (thuChiuThue > 120e+6 && thuChiuThue <= 210e+6) {
    tienThue += thuChiuThue * 0.15;
  } else if (thuChiuThue > 210e+6 && thuChiuThue <= 384e+6) {
    tienThue += thuChiuThue * 0.2; 
  } else if (thuChiuThue > 384e+6 && thuChiuThue <= 624e+6) {
    tienThue += thuChiuThue * 0.25;
  } else if (thuChiuThue > 624e+6 && thuChiuThue <= 960e+6) {
    tienThue += thuChiuThue * 0.3;
  } else if (thuChiuThue > 960e+6) {
    tienThue += thuChiuThue * 0.35;
  } else {
    alert("Số tiền thu nhập năm ko hợp lệ")
  }
 * 
 * Đầu ra:
 * xuất số thuế phải đóng
 */

document.getElementById("tinhThue").onclick = function () {
  //Đầu vào:
  let name3 = document.getElementById("name3").value;
  let tongThu = +document.getElementById("tongThu").value;
  let nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
  let result3 = document.getElementById("result3");
  let thuChiuThue = 0;
  let tienThue = 0;

  //Xử lý:
  thuChiuThue += tongThu - 4e6 - nguoiPhuThuoc * 1.6e6;
  if (thuChiuThue > 0 && thuChiuThue <= 60e6) {
    tienThue += thuChiuThue * 0.05;
  } else if (thuChiuThue > 60e6 && thuChiuThue <= 120e6) {
    tienThue += thuChiuThue * 0.1;
  } else if (thuChiuThue > 120e6 && thuChiuThue <= 210e6) {
    tienThue += thuChiuThue * 0.15;
  } else if (thuChiuThue > 210e6 && thuChiuThue <= 384e6) {
    tienThue += thuChiuThue * 0.2;
  } else if (thuChiuThue > 384e6 && thuChiuThue <= 624e6) {
    tienThue += thuChiuThue * 0.25;
  } else if (thuChiuThue > 624e6 && thuChiuThue <= 960e6) {
    tienThue += thuChiuThue * 0.3;
  } else if (thuChiuThue > 960e6) {
    tienThue += thuChiuThue * 0.35;
  } else {
    alert("Số tiền thu nhập năm ko hợp lệ");
  }

  //Quy đổi VND:
  let currentFormat = new Intl.NumberFormat("vn-VN");

  //Đầu ra:
  result3.style.display = "block";
  result3.innerHTML =
    "Họ tên: " +
    name3 +
    "; Tiền thuế là: " +
    currentFormat.format(tienThue) +
    " VND";
};

//Bài 4:
/**
 * Đầu vào:
 * lấy giá trị input vào các biến loaiKhach, maKH, soKenhCaoCap
 * tạo biến result4 để hiển thị kết quả ở đầu ra
 * tạo biến tienCap để tính tổng số tiền khách hàng phải trả
 * 
 * Xử lý:
 * -dùng switch gồm 2 case:
 * +case "nhaDam": thì tienCap += 4.5 + 20.5 + 7.5 * soKenhCaoCap;
 * +case "doanhNghiep": thì sẽ tạo biến soKetNoi để lấy giá trị soKetNoi từ input
 * if (soKetNoi <= 10) {
        tienCap += 15 + 75 + soKenhCaoCap * 50;
      } else {
        tienCap += 15 + 75 + 5 * (soKetNoi - 10) + soKenhCaoCap * 50;
      }

 * Đầu ra:
 * xuất kết quả gồm mã khách hàng và số tiền cáp mà khách hàng phải thanh toán
 *
 */


 //Tạo function hiện popup của khung nhập số kết nối nếu loại khách hàng là daonh nghiệp:     
function popup() {
  let x = document.getElementById("loaiKhach").value;
  if (x === "doanhNghiep") {
    document.getElementById("khachDoanhNghiep").innerHTML = "<label>Số kết nối:</label>" + 
    "<input type='text' id='soKetNoi' class='form-control' />";
  } else {
    document.getElementById("khachDoanhNghiep").innerHTML = "";
  }
};



document.getElementById("tinhTienCap").onclick = function() {
  //Đầu vào:
  let loaiKhach = document.getElementById("loaiKhach").value;
  let maKH = document.getElementById("maKH").value;
  let soKenhCaoCap = +document.getElementById("soKenhCaoCap").value;
  let result4 = document.getElementById("result4");
  let tienCap = 0;

  //Xử lý:
  if (soKenhCaoCap < 0) {
    alert("Số kênh cao cấp ko hợp lệ");
    return;
  }

  switch (loaiKhach){
    case "nhaDan":
      tienCap += 4.5 + 20.5 + 7.5 * soKenhCaoCap;
      break;
    case "doanhNghiep":
      let soKetNoi = +document.getElementById("soKetNoi").value;
      if (soKetNoi <= 10) {
        tienCap += 15 + 75 + soKenhCaoCap * 50;
      } else {
        tienCap += 15 + 75 + 5 * (soKetNoi - 10) + soKenhCaoCap * 50;
      }
  }

  //Đầu ra:
  result4.style.display = "block";
  result4.innerHTML = "Mã khách hàng: " + maKH + "; tiền cáp: $" + tienCap;
}