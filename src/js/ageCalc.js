export default class AgeCalc {
    constructor(earthAge) {
        this.earthAge = earthAge;
        this.solarPlanetYears = {
            mercury: 0.24,
            venus: 0.62,
            mars: 1.88,
            jupiter: 11.86
        };
    } 
}