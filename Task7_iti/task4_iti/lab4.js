const studentsList = [
  { id: "101", name: "Ahmed Mohamed", age: 20 },
  { id: "102", name: "Lina Hassan", age: 22 },
  { id: "103", name: "Omar Adel", age: 21 },
  { id: "104", name: "Mona Sami", age: 23 },
  { id: "105", name: "Yousef Nader", age: 24 },
  { id: "106", name: "Nadia Farid", age: 19 },
];

const selectElement = document.getElementById("studentSelect");

studentsList.forEach(student => {
  let opt = document.createElement("option");
  opt.value = student.id;
  opt.text = student.id;
  selectElement.add(opt);
});

selectElement.onchange = function() {
  const chosenId = this.value;
  const infoDiv = document.getElementById("studentData");
  const foundStudent = studentsList.find(s => s.id === chosenId);

  if (foundStudent) {
    infoDiv.innerHTML = `<div>Name: <em>${foundStudent.name}</em></div>
                         <div>Age: <em>${foundStudent.age}</em></div>`;
  } else {
    infoDiv.innerHTML = "";
  }
};
