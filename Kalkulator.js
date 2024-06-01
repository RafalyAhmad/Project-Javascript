const pesanSapaan = "Selamat datang di Kalkulator Sederhana!";
const pesanInput = "Masukkan ekspresi matematika (contoh: 2 + 3):";
const pesanHasil = "Hasil:";
const pesanError = "Format input tidak valid!";

function hitungEkspresi(ekspresi) {
    try {
        return eval(ekspresi);
    } catch (error) {
        return pesanError;
    }
}

function main() {
    console.log(pesanSapaan);
    console.log(pesanInput);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Masukkan ekspresi matematika: ', (ekspresi) => {
        const hasil = hitungEkspresi(ekspresi);
        console.log(pesanHasil, hasil);
        readline.close();
    });
}

// Panggil fungsi utama
main();
