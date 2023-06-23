import AgeCalc from '../src/js/ageCalc.js';

describe('AgeCalc', () => {
    test('Should correctly create an ageCalc object with earthAge property', () => {
        const ageCalc = new AgeCalc(25);
        expect(ageCalc.earthAge).toEqual(25);
    });

    test('Should correctly create an ageCalc object with solarPlanetYears property', () => {
        const ageCalc = new AgeCalc(25);
        expect(ageCalc.solarPlanetYears).toEqual({
            mercury: 0.23,
            venus: 0.61,
            mars: 1.87,
            jupiter: 11.86
        });
    });
});