let tables = document.getElementsByTagName("table");
let targetTable = tables[1];
let anchorTag = targetTable.querySelector("a");

anchorTag.href = "https://courses.net";
anchorTag.textContent = "Courses Portal";

let imageList = document.getElementsByTagName("img");
let finalImage = imageList[imageList.length - 1];
finalImage.style.border = "3px dashed orange";

function alertCheckedCheckboxes() {
  let myForm = document.getElementById("userData");
  let checkedInputs = myForm.querySelectorAll('input[type="checkbox"]:checked');
  let result = [];
  for (let i = 0; i < checkedInputs.length; i++) {
    result.push(checkedInputs[i].value);
  }
  alert("You chose: " + result.join(", "));
}

let targetDiv = document.getElementById("example");
if (targetDiv) {
  targetDiv.style.backgroundColor = "lightblue";
}
