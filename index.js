//Bài tập 1
/**
 *
 * @param {*} diemKV_TS Lấy điểm ưu tiên khu vực
 * @param {*} diemDT_TS Lấy điểm ưu tiên đối tượng
 * @param {*} diemMon1_TS Lấy điểm môn thứ nhất
 * @param {*} diemMon2_TS Lấy điểm môn thứ hai
 * @param {*} diemMon3_TS Lấy điểm môn thứ ba
 * @returns diemTong=diemKV+diemDT+diemMon1+diemMon2+diemMon3
 */
function tinhDiemTS(
  diemKV_TS,
  diemDT_TS,
  diemMon1_TS,
  diemMon2_TS,
  diemMon3_TS
) {
  var diemKV = Number(document.getElementById(diemKV_TS).value);
  var diemDT = Number(document.getElementById(diemDT_TS).value);
  var diemMon1 = Number(document.getElementById(diemMon1_TS).value);
  var diemMon2 = Number(document.getElementById(diemMon2_TS).value);
  var diemMon3 = Number(document.getElementById(diemMon3_TS).value);
  var diemTong = 0;
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    return 0;
  }
  diemTong = diemMon1 + diemMon2 + diemMon3 + diemKV + diemDT;
  return diemTong;
}
/**
 * ++Input:
 * diemChuan:number;
 * diemTS:number lấy giá trị trả về từ hàm tinhDiemTS() ở trên
 * ++Progress:
 * Nếu một trong 3 môn bằng 0 thì Rớt ko cần tính tổng
 * Nếu diemTS<diemChuan => Rớt,Tổng điểm ***
 * Nếu diemTS>diemChuan => Đậu,Tổng điểm ***
 * ++Output:
 * text:string
 */
document.getElementById("tinhBT1").onclick = function () {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var diemTS = tinhDiemTS(
    "diemKV",
    "diemDT",
    "diemMon1",
    "diemMon2",
    "diemMon3"
  );
  var text = "";
  if (diemTS == 0) {
    text = "Bạn đã rớt.Do bạn có điểm bằng 0";
  } else if (diemTS < diemChuan) {
    text = "Bạn đã rớt.Tổng điểm của bạn là " + diemTS;
  } else if (diemTS >= diemChuan) {
    text = "Bạn đã đậu.Tổng điểm của bạn là " + diemTS;
  }
  document.getElementById("outputBT1").innerHTML = text;
};
//Bài tập 2
/**
 *
 * @param {*} soKW_TS Lấy số kw điện do User nhập vào
 * @returns tienDien
 * tienDien được tính theo lũy kế như sau
 * <=50 => 500đ
 * <50 && <=100 => 650đ
 * >100 && <=200 => 850đ
 * >200 && <=350 => 1100đ
 * >350 => 1300đ
 */
function tinhTienDien(soKW_TS) {
  var soKW = Number(document.getElementById(soKW_TS).value);
  var tienDien = 0;
  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW > 50 && soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW > 100 && soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW > 200 && soKW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else if (soKW > 350) {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  } else {
    tienDien = 0;
  }
  return tienDien;
}
/**
 * ++Input:
 * nameUser:string;
 * tienDien:number lấy giá trị trả về của hàm tinhTienDien()
 * ++Output
 * Dùng innerHTML xuất ra ở thẻ div#outputBT2
 */
document.getElementById("tinhBT2").onclick = function () {
  var nameUser = document.getElementById("nameUser").value;
  var tienDien = tinhTienDien("soKW");
  document.getElementById("outputBT2").innerHTML =
    "Họ tên: " +
    nameUser +
    " ;Tiền điện là: " +
    tienDien.toLocaleString("vi-VN") +
    " đ";
};
