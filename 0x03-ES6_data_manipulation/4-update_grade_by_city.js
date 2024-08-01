export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => student.id === grade.studentId);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: foundGrade ? foundGrade.grade : 'N/A',
      };
    });
}

// export default function updateStudentGradeByCity(listOfStudents, city, newGrade) {

//   const studentInTheSameCity = listOfStudents.filter((student) => student.location === city);

//   return studentInTheSameCity.map((student) => {
//     const updatedStudent = [...student];
//     const getGrade = newGrade.find((grade) => grade.id === student.id);
//     if (getGrade) updatedStudent.grade = getGrade.grade;
//     else {
//       updatedStudent.grade = 'N/A';
//     }
//     return updatedStudent;
//   });
// }
