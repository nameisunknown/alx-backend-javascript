export default function getStudentIdsSum(listOfStudents) {
  const studentId = listOfStudents.reduce((prev, next) => prev + next.id, 0);

  return studentId;
}
