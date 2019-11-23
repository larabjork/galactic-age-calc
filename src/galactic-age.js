export class Age {
  constructor(age) {
    this.age = age;
    this.earthExpect = 78;
    this.earthRemain = 78 - this.age;
  }

  checkNumeric() {
    if (Number.isInteger(this.age)){
      return true;
    } else {
      return false;
    };
  }

  reachOrSurpass() {
    if (this.earthRemain <= 0){
      this.earthExceeded = this.earthRemain*-1
      return this.earthExceeded;
    } else {
      return this.earthRemain;
    };
  }

  convertMercury() {
    this.mercAge = this.age/0.24;
  }

  convertVenus() {
    this.venusAge = this.age/0.62;
  }

  convertMars() {
    this.marsAge = this.age/1.88;
  }

  convertJupiter() {
    this.jupiterAge = this.age/11.86;
  }

  mercuryRemain() {
    this.mercRemain = this.earthRemain/0.24;
  }

  venusRemain() {
    this.venusRemain = this.earthRemain/0.62;
  }

  marsRemain() {
    this.marsRemain = this.earthRemain/1.88;
  }

  jupiterRemain() {
    this.jupiterRemain = this.earthRemain/11.86;
  }



}
