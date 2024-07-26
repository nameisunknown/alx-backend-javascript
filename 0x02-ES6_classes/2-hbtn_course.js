export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._checkForStringType(name);
    this._length = HolbertonCourse._checkForLengthType(length);
    this.students = HolbertonCourse._checkForArrayType(students);
  }

  static _checkForStringType(type) {
    if (typeof type !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return type;
  }

  static _checkForLengthType(type) {
    if (typeof type !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return type;
  }

  static _checkForArrayType(type) {
    if (Array.isArray(type) && type.every((val) => typeof val === 'string')) {
      return type;
    }
    return type;
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setLength(length) {
    this._length = length;
  }

  getLength() {
    return this._length;
  }

  setStudents(students) {
    this._students = students;
  }
}
