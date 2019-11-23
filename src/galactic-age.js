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
      this.earthRemain*-1
      return this.earthRemain;
    } else {
      this.earthRemain*1;
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
    this.age = this.earthRemain/0.62;
  }

  marsRemain() {
    this.age = this.earthRemain/1.88;
  }

  jupiterRemain() {
    this.age = this.earthRemain/11.86;
  }



}
