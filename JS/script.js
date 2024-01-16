const psisi1 = document.getElementById("psisi1");
const psisi2 = document.getElementById("psisi2");
const btn1 = document.getElementById("btn1");
const result1 = document.getElementById("result1");
const reset1 = document.getElementById("reset1");
const btn2 = document.getElementById("btn2");
const result2 = document.getElementById("result2");
const reset2 = document.getElementById("reset2");

function fun1() {
  const a = psisi1.value;
  if (a >= 0) {
    result1.innerHTML = "Luas persegi = " + psisi1.value * psisi1.value;
  } else {
    result1.innerHTML = "Luas persegi = Angka yang anda masukan tidak valid";
  }
  return result1.innerHTML;
}
function rst1() {
  psisi1.value = "";
  result1.innerHTML = "Luas persegi = null";
}

function fun2() {
  const a = psisi2.value;
  if (a >= 0) {
    result2.innerHTML = "Keliling persegi = " + psisi2.value * 4;
  } else {
    result2.innerHTML =
      "Keliling persegi = Angka yang anda masukan tidak valid";
  }
  return result2.innerHTML;
}
function rst2() {
  psisi2.value = "";
  result2.innerHTML = "Keliling persegi = null";
}

btn1.addEventListener("click", fun1);
reset1.addEventListener("click", rst1);
btn2.addEventListener("click", fun2);
reset2.addEventListener("click", rst2);
