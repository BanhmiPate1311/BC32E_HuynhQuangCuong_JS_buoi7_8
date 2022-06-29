const questions = document.querySelectorAll(".homework");

for (var i = 0; i < questions.length; i++) {
  const element = questions[i];
  const btn = questions[i].querySelector(".homework-btn");
  btn.onclick = function (e) {
    console.log(e);
    handleCollapse(element);
  };
}

function handleCollapse(element) {
  for (var i = 0; i < questions.length; i++) {
    if (element !== questions[i]) {
      questions[i].classList.remove("show-text");
    }
  }
  element.classList.toggle("show-text");
}

var arrNumber = [];
document.getElementById("themSo").onclick = function () {
  //input so:number
  var nhapSo = Number(document.getElementById("nhapSo").value);
  //output ketQua: string
  var ketQua = "";
  //progress
  arrNumber.push(nhapSo);
  ketQua = "[" + arrNumber + "]";
  //in kết quả ra giao diện
  document.getElementById("nhapSo").value = "";
  document.getElementById("arrNumber").innerHTML = "Mảng: " + ketQua;
};
//Bài 1: Tổng các số dương trong mảng
document.getElementById("btnTongSoDuong").onclick = function () {
  //output : ketQua: number
  var ketQua = 0;
  //progress
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      ketQua = ketQua + arrNumber[i];
    }
  }
  //in kết quả ra giao diện
  document.getElementById("tongSoDuong").innerHTML =
    "Tổng số dương trong mảng: " + ketQua;
};

//Bài 2: Đếm số dương trong mảng
document.getElementById("btnDemSoDuong").onclick = function () {
  //output : ketQua: number
  var ketQua = 0;
  //progress
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      ketQua++;
    }
  }
  //in kết quả ra giao diện
  document.getElementById("demSoDuong").innerHTML =
    "Số dương trong mảng: " + ketQua + " số";
};

//Bài 3: Tìm số nhỏ nhất
document.getElementById("btnMin").onclick = function () {
  //output: min: number
  var min = arrNumber[0];
  //progress
  for (var i = 1; i < arrNumber.length; i++) {
    if (min > arrNumber[i]) {
      min = arrNumber[i];
    }
  }
  //in kết quả ra giao diện
  document.getElementById("soMin").innerHTML = "Số nhỏ nhất trong mảng: " + min;
};

//Bài 4: Tìm số dương nhỏ nhất
document.getElementById("btnDuongMin").onclick = function () {
  //output: min: number, ketQua = string
  var ketQua = "";
  var min = -1;
  //progress
  for (var i = 0; i < arrNumber.length; i++) {
    if ((min == -1 || min > arrNumber[i]) && arrNumber[i] > 0) {
      min = arrNumber[i];
    }
  }
  if (min == -1) {
    ketQua = "Không có nhóe!";
  } else {
    ketQua = "Số dương nhỏ nhất trong mảng: " + min;
  }
  //in kết quả ra giao diện
  document.getElementById("soDuongMin").innerHTML = ketQua;
};

//Bài 5: Tìm số chẵn cuối cùng
document.getElementById("btnLastEven").onclick = function () {
  //output: lastEven: number; ketQua = string
  var ketQua = "";
  var lastEven = null;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
      lastEven = arrNumber[i];
    }
  }
  if (lastEven == null) {
    ketQua = "Không có nhóe!";
  } else {
    ketQua = "Số chẵn cuối cùng là: " + lastEven;
  }
  //in kết quả ra giao diện
  document.getElementById("lastEven").innerHTML = ketQua;
};

//Bài 6: Đổi chỗ 2 vị trí trong mảng
document.getElementById("btnChange").onclick = function () {
  //input: vitri1, vitri2: number
  var pos1 = Number(document.getElementById("pos_1").value);
  var pos2 = Number(document.getElementById("pos_2").value);
  //output: arrNumber: array
  //progress: temp: number
  var temp = arrNumber[pos1];
  arrNumber[pos1] = arrNumber[pos2];
  arrNumber[pos2] = temp;
  //in kết quả ra giao diện
  document.getElementById("changedArr").innerHTML =
    "Mảng sau khi đổi là: " + arrNumber;
};

//Bài 7: Sắp xếp tăng dần
document.getElementById("btnSortUp").onclick = function () {
  //output: arrNumber
  //progress: temp: number
  for (var i = 0; i < arrNumber.length - 1; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] > arrNumber[j]) {
        var temp = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }
  //in kết quả ra giao diện
  document.getElementById("sortUp").innerHTML =
    "Mảng sau khi sắp xếp là: " + arrNumber;
};

//Bài 8: Tìm số nguyên tố đầu tiên
document.getElementById("timSoNT").onclick = function () {
  //output kiemtra: boolean; ketQua = string
  var index = arrNumber.findIndex(kiemTraSoNT);
  var ketQua =
    index !== -1
      ? "Số nguyên tố đầu tiên là: " + arrNumber[index]
      : "Không có số nguyên tố";
  //in kết quả ra giao diện
  document.getElementById("soNTDau").innerHTML = ketQua;
};

function kiemTraSoNT(so) {
  if (so > 1) {
    var kiemTra = true;
    for (var i = 2; i <= Math.sqrt(so); i++) {
      if (so % i === 0) {
        kiemTra = false;
        break;
      }
    }
    return kiemTra;
  }
}

//Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
var arrNumber2 = [];
document.getElementById("btnThemSo2").onclick = function () {
  //input so:number
  var nhapSo2 = Number(document.getElementById("nhapSo2").value);
  //output ketQua: string, arrNumber2: array

  var ketQua = "";
  //progress
  arrNumber2.push(nhapSo2);
  ketQua = "[" + arrNumber2 + "]";
  //in kết quả ra giao diện
  document.getElementById("nhapSo2").value = "";
  document.getElementById("arrNumber2").innerHTML = "Mảng: " + ketQua;
};

document.getElementById("demSN").onclick = function () {
  //output: dem: number
  var dem = 0;
  //progress
  for (var i = 0; i < arrNumber2.length; i++) {
    if (Number.isInteger(arrNumber2[i])) {
      dem++;
    }
  }
  //in kết quả ra giao diện
  document.getElementById("soNguyen").innerHTML = "Số nguyên: " + dem;
};

//Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
document.getElementById("btnSoSanh").onclick = function () {
  //output: soDuong, soAm: number, ketQua = string
  var soDuong = 0;
  var soAm = 0;
  //progress
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] !== 0) {
      arrNumber[i] > 0 ? soDuong++ : soAm++;
    }
  }
  ketQua =
    soDuong > soAm
      ? "Số dương > số âm"
      : soDuong < soAm
      ? "Số dương < số âm"
      : "Số dương = số âm";
  //in kết quả ra giao diện
  document.getElementById("soSanh").innerHTML = ketQua;
};
