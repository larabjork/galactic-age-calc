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
    const newMercAge = new Age(15);
    newMercAge.convertMercury(15);
    expect(newMercAge.age===62.5).toEqual(true);
  });

  test('should correctly calculate age in Venus years', () => {
    const newVenusAge = new Age(15);
    newVenusAge.convertVenus(15);
    expect(newVenusAge.age===24.193548387096776).toEqual(true);
  });

  test('should correctly calculate age in Mars years', () => {
    const newMarsAge = new Age(15);
    newMarsAge.convertMars(15);
    expect(newMarsAge.age===7.9787234042553195).toEqual(true);
  });

  test('should correctly calculate age in Jupiter years', () => {
    const newJupiterAge = new Age(15);
    newJupiterAge.convertJupiter(15);
    expect(newJupiterAge.age===1.2647554806070826).toEqual(true);
  });

  test('should correctly calculate remaining years on Earth, based on average expectancy of 78', () => {
    const newEarthRemain = new Age(15);
    expect(newEarthRemain.earthRemain===63).toEqual(true);

  });

  test('should correctly calculate remaining years, in Mercury years', () => {
    const testEarthRem = new Age(15);
    const testMercRem = testEarthRem.convertMercury(15);
    expect(testMercRem.mercuryRemain===262.5).toEqual(true);
  });




});
