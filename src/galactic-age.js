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

  convertMercury(age) {
    this.age = this.age/0.24;

  }

  convertVenus(age) {
    this.age = this.age/0.62;
  }
}
