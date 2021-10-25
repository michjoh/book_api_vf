// rule of least powerful abstraction
function createProgrammer() {
    const languages = [];

    return {
        // local reasoning
        // start
        learnNewLanguage(language) {
            languages.push(language);
        },
        // end
        isPragmatic() {
            return languages.length > 2;
        }
    };
}

const programmer3 = createProgrammer();
programmer3.learnNewLanguage('Elm');
programmer3.learnNewLanguage('Clojure');
console.log(programmer3.isPragmatic()); // false
programmer3.learnNewLanguage('Haskell');
console.log(programmer3.isPragmatic()); // true

// local reasoning - this usage is "100 files away"
['Java', 'Ruby', 'Python'].forEach(programmer3.learnNewLanguage, undefined);