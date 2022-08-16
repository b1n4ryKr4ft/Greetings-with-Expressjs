const assert = require('assert');

const greetMeInLangage = require('../greet.js');

it("should be able to greet a person in english when a person enters their name and count", function(){

    let greetings = greetMeInLangage()

    greetings.enterNameAndLanguage('Wiseman', "english");
    assert.equal(1, greetings.getMyCount());
    assert.equal( 'Hello, Wiseman' , greetings.returnChosenLanguage());
});