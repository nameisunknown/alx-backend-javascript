import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const returnedArr = [];

  try {
    const classRoom1 = new ClassRoom(19);
    const classRoom2 = new ClassRoom(20);
    const classRoom3 = new ClassRoom(34);

    returnedArr.push(classRoom1, classRoom2, classRoom3);
  } catch (err) {
    throw new Error(`${err}`);
  }

  return returnedArr;
}
