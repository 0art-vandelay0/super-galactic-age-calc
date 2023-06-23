import AgeCalc from './ageCalc.js';

export default class BirthdayYears {
    constructor(ageCalc, pastBirthday, futureBirthday) {
        this.mercuryYear = ageCalc.solarPlanetYears.mercury;
        this.venusYear = ageCalc.solarPlanetYears.venus;
        this.marsYear = ageCalc.solarPlanetYears.mars;
        this.jupiterYear = ageCalc.solarPlanetYears.jupiter;
        this.pastBirthday = pastBirthday;
        this.futureBirthday = futureBirthday;
    }

    getMercuryYearsPastBirthday() {
        const mercuryYearsPastBirthday = this.pastBirthday / this.mercuryYear;
        return Number(mercuryYearsPastBirthday.toFixed(2));
    }
}