import BirthdayYears from '../src/birthdayYears';

describe('BirthdayYears', () => {

    test('Should create a birthdayYears object with earthAge property', () => {
        const birthdayYears = new BirthdayYears(25);
        expect(birthdayYears.earthAge).toEqual(25);
    });
});