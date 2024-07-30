export default function getListStudents() {
  const arrayOfObjects = [];

  const obj1 = {
    id: 1,
    firstName: 'Guillame',
    location: 'San Francisco'
  }

  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia'
  }

  const obj3 = {
    id: 3,
    firstName: 'Serena',
    location: 'San Francisco'
  }

  arrayOfObjects.push(obj1, obj2, obj3);

  return arrayOfObjects;
}