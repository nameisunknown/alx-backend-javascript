interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Olawale',
  lastName: 'Segun',
  age: 34,
  location: 'Kenya'
}

const student2: Student = {
  firstName: 'Jegede',
  lastName: 'Folarin',
  age: 33,
  location: 'Rwanda'
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const headerRow = document.createElement('tr');

const headers = ['First Name', 'Location'];
headers.map(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});

table.appendChild(headerRow);

studentList.map(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
