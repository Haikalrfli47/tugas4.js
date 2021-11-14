var a = 180;
var b = 170;
var c = 160;
if (a > b) {
  if (a > c) {
    console.log(`Tinggi pertama adalah ${a}`);
  } else {
    console.log(`Tinggi kedua adalah ${a}`);
  }
} else {
  if (a < c) {
    console.log(`Tinggi ketiga adalah ${a}`);
  } else {
    console.log(`Tinggi kedua adalah ${a}`);
  }
}
// BAGIAN b
if (b > a) {
  if (b > c) {
    console.log(`Tinggi pertama adalah ${b}`);
  } else {
    console.log(`Tinggi kedua adalah ${b}`);
  }
} else {
  if (b < c) {
    console.log(`Tinggi ketiga adalah ${b}`);
  } else {
    console.log(`Tinggi kedua adalah ${b}`);
  }
}
// Bagian C
if (c > a) {
  if (c > b) {
    console.log(`Tinggi pertama adalah ${c}`);
  } else {
    console.log(`Tinggi kedua adalah ${c}`);
  }
} else {
  if (c < b) {
    console.log(`Tinggi ketiga adalah ${c}`);
  } else {
    console.log(`Tinggi kedua adalah ${c}`);
  }
}
