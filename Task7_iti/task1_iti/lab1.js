let imgs = document.images;
console.log("Document images:");
for (let i = 0; i < imgs.length; i++) {
  console.log(imgs.item(i));
}

let imgsWithClass = document.querySelectorAll(".img2");
console.log("Class 'img2' images:");
imgsWithClass.forEach((el) => console.log(el));

let cityList = document.getElementById("cityDropdown");
if (cityList) {
  console.log("Cities in dropdown:");
  Array.from(cityList.options).forEach((opt) =>
    console.log(opt.text + " / " + opt.value)
  );
}

let tbls = document.getElementsByTagName("table");
let secondTbl = tbls[1];
console.log("Rows inside second table:");
Array.from(secondTbl.rows).forEach((row) => console.log(row));

let blueTexts = document.getElementsByClassName("fontBlue");
console.log("Blue-colored elements:");
Array.from(blueTexts).forEach((el) => console.log(el));
