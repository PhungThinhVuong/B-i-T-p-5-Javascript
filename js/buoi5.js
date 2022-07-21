
function findMin() {
  for (var e = 0, t = 0, n = 1; n < 1e4; n++)
    if (((e += n), console.log(e), e > 1e4)) {
      console.log(n), (t = n);
      break;
    }
  document.getElementById("txtResult1").innerHTML =
    "Số nguyên dương nhỏ nhất: " + t;
}
function tinhTong() {
  for (
    var e = document.getElementById("inputX").value,
      t = document.getElementById("inputN").value,
      n = 0,
      o = 1;
    o <= t;
    o++
  )
    n += Math.pow(e, o);
  document.getElementById("txtResult2").innerHTML = "Tổng: " + n;
}
function tinhGT() {
  for (
    var e = document.getElementById("inputN1").value, t = 1, n = 1;
    n <= e;
    n++
  )
    t *= n;
  document.getElementById("txtResult3").innerHTML = "Giai thừa: " + t;
}
function taoDiv() {
  for (var e = "", t = 1; t <= 10; t++)
    e +=
      t % 2 == 0
        ? "<div class='bg-danger text-white p-2'>Div chẵn</div>"
        : "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
  document.getElementById("txtResult4").innerHTML = e;
}
function inSoNguyenTo() {
  for (
    var e = document.getElementById("inputN2").value, t = "", n = 1;
    n <= e;
    n++
  ) {
    checkPrime(n) && (t += " " + n);
  }
  document.getElementById("txtResult5").innerHTML = t;
}
function checkPrime(e) {
  if (e < 2) return !1;
  for (var t = 2; t <= Math.sqrt(e); t++) if (e % t == 0) return !1;
  return !0;
}
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  !1
),
  (document.onkeydown = function (e) {
    return (
      123 != (e = e || window.event).keyCode &&
      (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) &&
      void 0
    );
  });
