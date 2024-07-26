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

  set name(name) {
    this._name = HolbertonCourse._checkForStringType(name);
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this._length = HolbertonCourse._checkForLengthType(length);
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._students = HolbertonCourse._checkForArrayType(students);
  }

  get students() {
    return this._students;
  }
}
