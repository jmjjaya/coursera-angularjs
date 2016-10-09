var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', ContentLoaded);

function ContentLoaded(event) {
  document.getElementById('name').addEventListener('keyup',keyUp);
}

function keyUp(event) {
  CalculateNumericOutput();
}

function CalculateNumericOutput() {
  student.name = document.getElementById('name').value;
  var totalNameValue = 0;

  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  var output = "නමෙහි අකුරු ගණන:" + totalNameValue;
  document.getElementById('output').innerText = output;
}
