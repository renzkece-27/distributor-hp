import { validasiInput, validasiStock, cekDistributor } from './utils.js';

const inputHP = "samsung";
const jumlahStock = "1";

try {
  validasiInput(inputHP);
  validasiStock(jumlahStock);

  const detail = cekDistributor(inputHP);

  //mengecek apakah permintaan stock tidak melebihi batas
  if (parseInt(jumlahStock) > detail.stock) {
    throw new Error("Stok tidak mencukupi dari distributor.");
  }

  for (let i = 1; i < 1; i++) {
  console.log(`Nama HP      : ${detail.nama}`);
  console.log(`Stock Tersedia : ${detail.stock}`);
}
} catch (error) {
  console.error("Error :", error.message);
}




