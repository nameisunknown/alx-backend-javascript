export default function getStudentsByLocation(listOfStudents, city) {
  const studentsWithSpecificLocation = listOfStudents.filter((item) => item.location === city);

  return studentsWithSpecificLocation;
}
