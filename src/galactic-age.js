export class Age {
  constructor(age) {
    this.age = age;
    this.earthExpect = 78;
    this.earthRemain = 78 - this.age;
  }

  convertAge() {
    this.convertArray = [];
  }


  checkNumeric(age) {
    if (Number.isInteger(this.age)){
      return true;
    } else {
      return false;
    };
  }

  convertMercury(age) {
    const mercAge = this.age/0.24;
    this.convertArray.push(mercAge);
  }

  convertVenus(age) {
    this.age = this.age/0.62;
    convertArray.push(this.age);
  }

  convertMars(age) {
    this.age = this.age/1.88;
    convertArray.push(this.age);
  }
  convertJupiter(age) {
    this.age = this.age/11.86;
    convertArray.push(this.age);
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
  jupiterRemain(age) {
    this.age = this.earthRemain/11.86;
  }
}
