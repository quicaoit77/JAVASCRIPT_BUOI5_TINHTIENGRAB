/**
 * phân tích
 * - input: type Car, km, time wait
 * - process:
 * + bắt sự kiện tại nút tính tiền
 * + lấy các giá trị đầu vào
 * + tính toán số tiên phải trả ( có thể tách hàm)
 * - output : in chi tiết hóa đơn
 */
//loại xe
function getTypeCar() {
  var grabCar = document.getElementById("grabCar").checked;
  var grabSUV = document.getElementById("grabSUV").checked;
  var grabBlack = document.getElementById("grabBlack").checked;

  if (grabCar) {
    var typeCar = "grabCar";
  } else if (grabSUV) {
    var typeCar = "grabSUV";
  } else if (grabBlack) {
    var typeCar = "grabBlack";
  }
  return typeCar;
}
// Tính Tiền Theo loại xe
function TinhTienTheoLoaiXe(
  kmDauTien,
  km1_19,
  km19_troDi,
  tienThoiGianCho,
  inputKm,
  inputTimewait
) {
  /**
   * input
   * -kmDauTien, km1_19, km19_troDi, ThoiGianCho
   * process
   *
   *
   * output
   */
  var tongTien = 0;
  if (inputKm <= 1) {
    tongTien = inputKm * kmDauTien;
  } else if (inputKm >= 1 && inputKm <= 19) {
    tongTien = kmDauTien + (inputKm - 1) * km1_19;
  } else if (inputKm > 19) {
    tongTien = kmDauTien + 18 * km1_19 + (inputKm - 19) * km19_troDi;
  }
  // Tính tiền thời gian chờ
  if (inputTimewait >= 3) {
    tongTien = tongTien + (inputTimewait / 3) * tienThoiGianCho;
  }
  return tongTien;
}
// tính tiền
function tinhTien(typeCar, inputKm, inputTimewait) {
  var tongTien = 0;
  switch (typeCar) {
    case "grabCar":
      {
        tongTien = TinhTienTheoLoaiXe(
          8000,
          7500,
          7000,
          2000,
          inputKm,
          inputTimewait
        );
      }
      break;
    case "grabSUV":
      {
        tongTien = TinhTienTheoLoaiXe(
          9000,
          8500,
          8000,
          3000,
          inputKm,
          inputTimewait
        );
      }
      break;
    case "grabBlack":
      {
        tongTien = TinhTienTheoLoaiXe(
          10000,
          9500,
          9000,
          4000,
          inputKm,
          inputTimewait
        );
      }
      break;
    default:
      break;
  }
  return tongTien;
}

document.getElementById("btn__bill").onclick = function () {
  var inputKm = document.getElementById("input__km").value;
  var inputTimewait = document.getElementById("input__timewait").value;
  console.log("giá trị km, timeWait", inputKm, inputTimewait);
  //chọn loại xe
  var typeCar = getTypeCar();
  console.log("typecar:", typeCar);
  var tongTien = tinhTien(typeCar, inputKm, inputTimewait);
  tongTien = Math.floor(tongTien).toLocaleString("Vi-vn");
  console.log(tongTien);
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
};
