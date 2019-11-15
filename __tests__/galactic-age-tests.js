import { Age } from './../src/galactic-age.js';

describe ('Age', () => {
  test('should create an age object with Earth age', () => {
    const newAge = new Age(15);
    expect(newAge.age).toEqual(15);
  });
});
