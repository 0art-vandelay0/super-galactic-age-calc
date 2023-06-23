import AgeCalc from '../src/js/ageCalc.js';

describe('AgeCalc', () => {
    test('Should correctly create an ageCalc object with earthAge property', () => {
        const ageCalc = new AgeCalc(25);
        expect(ageCalc.earthAge).toEqual(25);
    });

    test('Should correctly create an ageCalc object with solarPlanetYears property', () => {
        const ageCalc = new AgeCalc(25);
        expect(ageCalc.solarYears).toEqual({
            mercury: 0.24,
            venus: 0.62,
            mars: 1.88,
            jupiter: 11.86
        });
    });
});