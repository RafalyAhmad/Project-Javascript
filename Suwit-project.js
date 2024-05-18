var p = prompt("Masukkan Pilihan Anda (Gajah/Semut/Orang) :");

var comp = Math.random();
if (comp < 0.34) {
  comp = "Gajah";
} else if (comp > 0.34 && comp < 0.67) {
  comp = "Semut";
} else comp > 0.67;
{
  comp = "Orang";
}

console.log("Pilihan Komputer : " + comp);

if (p === comp) {
  alert("Hasilnya Seri");
} else if (p === "Gajah") {
  if (comp === "Semut") {
    alert("Computer Win!!");
  } else if (comp === "Orang") {
    alert("Computer Kalah!!");
  }
} else if (p === "Semut") {
  if (comp === "Gajah") {
    alert("Computer Kalah!!");
  } else if (comp === "Orang") {
    alert("Computer WIN!!");
  }
} else if (p === "Orang") {
  if (comp === "Semut") {
    alert("Computer Kalah!!");
  } else if (comp === "Gajah") {
    alert("Computer Win!!");
  }
}
