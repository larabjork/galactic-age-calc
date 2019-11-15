import { Age } from './../src/galactic-age.js';

describe ('Age', () => {

  test('should create an age object with Earth age', () => {
    const newAge = new Age(15);
    expect(newAge.age).toEqual(15);
  });

  test('should not be able to process non-numerical characters entered by user', () => {
    const newLetter = new Age("asdf")
    newLetter.checkNumeric("asdf")
    expect(newLetter.age===true).toEqual(false);
  });

  test('should correctly calculate age in Mercury years', () => {
    const newMercAge = new Age(15/.24);
    newMercAge.convertMercury(15);
    expect(newMercAge.age===62.5).toEqual(true);
  });




});
