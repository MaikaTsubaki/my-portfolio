const name = document.getElementById("name");
const Age = document.getElementById("Age");
const University = document.getElementById("University");
const Faculty = document.getElementById("Faculty");
const grade = document.getElementById("grade");

name.onmousemove = function () {
  nameanswer.textContent = "椿真衣佳";
};
Age.onmousemove = function () {
  Ageanswer.textContent = "20歳";
};

University.onmousemove = function () {
  Universityanswer.textContent = "法政大学";
};
Faculty.onmousemove = function () {
  Facultyanswer.textContent = "文学部日本文学科 ";
};
grade.onmousemove = function () {
  gradeanswer.textContent = "3年 ";
};
