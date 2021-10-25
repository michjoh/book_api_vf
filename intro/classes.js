class Programmer1 {
    constructor() {
        this.languages = [];
    }

    learnNewLanguage(language) {
        this.languages.push(language);
    }

    isPragmatic() {
        return this.languages.length > 2;
    }
}


const programmer1 = new Programmer1();
programmer1.learnNewLanguage('Java');
programmer1.learnNewLanguage('Ruby');
console.log(programmer1.isPragmatic()); // false
programmer1.learnNewLanguage('Python');
console.log(programmer1.isPragmatic()); // true

// local reasoning
// programming at a distance
['Java', 'Ruby', 'Python'].forEach(programmer1.learnNewLanguage);