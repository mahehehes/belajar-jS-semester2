const berat_Madan = 60;
const tinggi_Madan = 1.6;
const berat_Joan = 64;
const tinggi_Joan = 1.65;

const imtMadan = berat_Madan / tinggi_Madan ** 2;
const imtJoan = berat_Joan / tinggi_Joan ** 2;

const madanHigherIMT = imtMadan > imtJoan;

console.log("Berat Madan : " + berat_Madan);
console.log("Tinggi Madan : " + tinggi_Madan);
console.log("maka IMT Madan adalah : " + imtMadan);

console.log("Berat Joan : " + berat_Joan);
console.log("Tinggi Joan : " + tinggi_Joan);
console.log("maka IMT Joan adalah : " + imtJoan);


console.log("Apakah IMT Madan lebih tinggi daripada IMT Joan? : " + madanHigherIMT);
