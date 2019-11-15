import { Age } from './../src/galactic-age.js';

describe ('Age', () => {
  test('should not do anything to non-numerical characters entered by user', () => {
    const newLetter = new Age(asdf);
    expect(newLetter.age).toEqual(NaN);
  })

  test('should create an age object with Earth age', () => {
    const newAge = new Age(15);
    expect(newAge.age).toEqual(15);
  });

});
