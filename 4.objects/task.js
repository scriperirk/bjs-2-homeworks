function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }

}

Student.prototype.addMarks = function (...marks) {
  for (let mark of marks) {
    this.addMark(mark);
  }
}

//new Student("Anton","male","21");
//new Student("Tatiana","female","22");
//new Student("Kirill","male","18");

