import { daftarHP } from './data.js';

// Validasi nama HP
export function validasiInput(nama) {
  if (typeof nama !== 'string' || isFinite(nama)) {
    throw new Error("Input nama HP tidak valid!");
  }
}

export function validasiStock(jumlah) {
  if (isNaN(jumlah) || jumlah <= 0) {
    throw new Error("Jumlah stock tidak boleh kurang dari 1 dan harus berupa angka!");
  }
}

// Mengecek detail distributor
export function cekDistributor(nama) {
  const hp = nama.toLowerCase();

  if (daftarHP[hp]) {
    return {
      nama: daftarHP[hp].nama,
      stock: daftarHP[hp].stock,
    };
  } else {
    throw new Error("HP tidak terdaftar di sistem distributor.");
  }
}

