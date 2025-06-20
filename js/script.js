const btnLuas = document.getElementById("btnLuas");
const btnKeliling = document.getElementById("btnKeliling");
const formLuas = document.getElementById("formLuas");
const formKeliling = document.getElementById("formKeliling");
const hasil = document.getElementById("hasil");
const output = document.getElementById("output");

btnLuas.addEventListener("click", () => {
  formLuas.classList.remove("hidden");
  formKeliling.classList.add("hidden");
  hasil.classList.add("hidden");
});

btnKeliling.addEventListener("click", () => {
  formKeliling.classList.remove("hidden");
  formLuas.classList.add("hidden");
  hasil.classList.add("hidden");
});

formLuas.addEventListener("submit", function(e) {
  e.preventDefault();
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (alas > 0 && tinggi > 0) {
    const luas = 0.5 * alas * tinggi;
    output.textContent = `Luas Segitiga: ${luas.toFixed(2)} cm²`;
    hasil.classList.remove("hidden");
  } else {
    alert("Masukkan nilai alas dan tinggi yang valid.");
  }
});

formKeliling.addEventListener("submit", function(e) {
  e.preventDefault();
  const sisi1 = parseFloat(document.getElementById("sisi1").value);
  const sisi2 = parseFloat(document.getElementById("sisi2").value);
  const sisi3 = parseFloat(document.getElementById("sisi3").value);

  if (sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
    const keliling = sisi1 + sisi2 + sisi3;
    output.textContent = `Keliling Segitiga: ${keliling.toFixed(2)} cm`;
    hasil.classList.remove("hidden");
  } else {
    alert("Masukkan nilai sisi-sisi yang valid.");
  }
});
