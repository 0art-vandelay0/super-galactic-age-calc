import AgeCalc from '../src/js/ageCalc.js';

describe('AgeCalc', () => {
    Test('Should correctly create an ageCalc object with earthAge property', () => {
        const ageCalc = new AgeCalc(25);
        expect(ageCalc.earthAge).toEqual(25);
    });
});