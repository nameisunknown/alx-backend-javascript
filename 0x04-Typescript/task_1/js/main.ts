interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacher {
  (
    firstName: string,
    lastName: string
  ): string
}

const prinTeacher: PrintTeacher = (firstName, lastName) => {
  return `${firstName.charAt(0)}.${lastName}`;
}

interface Student {
  firstName: string;
  lastName: string;

  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  (firstName: string, lastName: string): Student
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName;
  }
}
