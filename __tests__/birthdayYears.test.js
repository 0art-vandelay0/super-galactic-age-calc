import BirthdayYears from '../src/js/birthdayYears.js';
import AgeCalc from '../src/js/ageCalc.js';

describe('BirthdayYears', () => {
    test('Should create a birthdayYears object with mercuryYear, venusYear, marsYear, jupiterYear, pastBirthday, and futureBirthday properties', () => {
        const ageCalc = new AgeCalc(25);
        const pastBirthday = 20;
        const futureBirthday = 30;
        const birthdayYears = new BirthdayYears(ageCalc, pastBirthday, futureBirthday);
    
        expect(birthdayYears.mercuryYear).toEqual(ageCalc.solarPlanetYears.mercury);
        expect(birthdayYears.venusYear).toEqual(ageCalc.solarPlanetYears.venus);
        expect(birthdayYears.marsYear).toEqual(ageCalc.solarPlanetYears.mars);
        expect(birthdayYears.jupiterYear).toEqual(ageCalc.solarPlanetYears.jupiter);
        expect(birthdayYears.pastBirthday).toEqual(pastBirthday);
        expect(birthdayYears.futureBirthday).toEqual(futureBirthday);
    });

    let ageCalc;
    let pastBirthday;
    let futureBirthday;
    let birthdayYears;

    beforeEach(() => {
        ageCalc = new AgeCalc(56);
        pastBirthday = 43;
        futureBirthday = 61;
        birthdayYears = new BirthdayYears(ageCalc, pastBirthday, futureBirthday);
    });

    test('Should return the number of mercury years past birthday', () => {
        const mercuryBirthdays = birthdayYears.getYearsSincePastBirthday().mercuryYearsPassed;
        expect(mercuryBirthdays).toEqual(54.17);
    });

});