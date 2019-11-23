import { Age } from './../src/galactic-age.js';

describe ('Age', () => {

  test('should create an age object with Earth age', () => {
    const newAge = new Age(15);
    expect(newAge.age).toEqual(15);
  });

  test('should not be able to process non-numerical characters entered by user', () => {
    const newLetter = new Age("asdf")
    newLetter.checkNumeric()
    expect(newLetter.age===true).toEqual(false);
  });

  test('should correctly account for user has already reached/surpassed average life expectancy', () => {
    const testEdge = new Age(82);
    testEdge.reachOrSurpass();
    expect(testEdge.age).toBeGreaterThanOrEqual(0);
  });

  test('should correctly calculate age in Mercury years', () => {
    const newMercAge = new Age(15);
    newMercAge.convertMercury();
    expect(newMercAge.age===62.5).toEqual(true);
  });

  test('should correctly calculate age in Venus years', () => {
    const newVenusAge = new Age(15);
    newVenusAge.convertVenus();
    expect(newVenusAge.age===24.193548387096776).toEqual(true);
  });

  test('should correctly calculate age in Mars years', () => {
    const newMarsAge = new Age(15);
    newMarsAge.convertMars();
    expect(newMarsAge.age===7.9787234042553195).toEqual(true);
  });

  test('should correctly calculate age in Jupiter years', () => {
    const newJupiterAge = new Age(15);
    newJupiterAge.convertJupiter();
    expect(newJupiterAge.age===1.2647554806070826).toEqual(true);
  });

  test('should correctly calculate remaining years on Earth, based on average expectancy of 78', () => {
    const newEarthRemain = new Age(15);
    expect(newEarthRemain.earthRemain===63).toEqual(true);

  });

  test('should correctly calculate remaining years, in Mercury years', () => {
    const testMercRem = new Age(15);
    testMercRem.mercuryRemain();
    expect(testMercRem.age===262.5).toEqual(true);
  });

  test('should correctly calculate remaining years, in Venus years', () => {
    const testVenRem = new Age(15);
    testVenRem.venusRemain();
    expect(testVenRem.age===101.61290322580645).toEqual(true);
  });

  test('should correctly calculate remaining years, in Mars years', () => {
    const testMarsRem = new Age(15);
    testMarsRem.marsRemain(15);
    expect(testMarsRem.age===33.51063829787234).toEqual(true);
  });

  test('should correctly calculate remaining years, in Jupiter years', () => {
    const testJupRem = new Age(15);
    testJupRem.jupiterRemain();
    expect(testJupRem.age===5.311973018549748).toEqual(true);
  });


});
