export class Age {
  constructor(age) {
    this.age = age;
  }

  checkNumeric(age) {
    if (Number.isInteger(this.age)){
      return true;
    } else {
      return false
    };
  }

}
