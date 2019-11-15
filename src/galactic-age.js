export class Age {
  constructor(age) {
    this.age = age;
    this.earthExpect = 78;
    this.earthRemain = 78 - this.age;
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

  convertMars(age) {
    this.age = this.age/1.88;
  }
  convertJupiter(age) {
    this.age = this.age/11.86;
  }

  mercuryRemain(age) {
    this.age = this.earthRemain/0.24;
  }

  venusRemain(age) {
    this.age = this.earthRemain/0.62;
  }

  marsRemain(age) {
    this.age = this.earthRemain/1.88;
  }
}
