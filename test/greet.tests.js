const assert = require('assert');

const greetMeInLangage = require('../greet.js');

describe('Greeting function', function(){

it("should be able to greet a person in english when a person enters their name and count", function(){

    let greetings = greetMeInLangage()

    greetings.enterNameAndLanguage('Wiseman', "english");
    //assert.equal(1, greetings.getMyCount());
    assert.equal( 'Hello, Wiseman' , greetings.returnChosenLanguage());
});

it("should be able to greet a person in xhosa when a person enters their name and count", function(){

    let greetings = greetMeInLangage()

    greetings.enterNameAndLanguage('Wiseman', "isiXhosa");
    //assert.equal(1, greetings.getMyCount());
    assert.equal( 'Molo, Wiseman' , greetings.returnChosenLanguage());
});

it("should be able to greet a person in afrikaans when a person enters their name and count", function(){

    let greetings = greetMeInLangage()

    greetings.enterNameAndLanguage('Wiseman', "afrikaans");
    //assert.equal(1, greetings.getMyCount());
    assert.equal( 'Hallo, Wiseman' , greetings.returnChosenLanguage());
});

it("should ask me to enter a name when the textbox and buttons are empty at greet click button", function(){
    let greetings = greetMeInLangage();

    greetings.notCheckedbutton("", typeof window == 'undefined');
    assert.equal("Please enter your name and choose a Language button", greetings.returnEmptyButtonsAndTextbox());

});

it("should ask me to select a button when a button is not selected and the textbox is not empty ", function(){
    let greetings = greetMeInLangage();

    greetings.notCheckedbutton('Wiseman', typeof window == 'undefined');
    assert.equal("Please choose a Language button", greetings.returnEmptyButtonsAndTextbox());

});

it("should ask me to enter a name when the english button selected and the textbox is empty ", function(){
    let greetings = greetMeInLangage();

    greetings.notCheckedbutton("", "english");
    assert.equal("Please enter your name", greetings.returnEmptyButtonsAndTextbox());

})

it("should ask me to enter a name when the isiXhosa button selected and the textbox is empty ", function(){
    let greetings = greetMeInLangage();

    greetings.notCheckedbutton("", "isiXhosa");
    assert.equal("Please enter your name", greetings.returnEmptyButtonsAndTextbox());

})

it("should ask me to enter a name when the afrikaans button selected and the textbox is empty ", function(){
    let greetings = greetMeInLangage();

    greetings.notCheckedbutton("", "afrikaans");
    assert.equal("Please enter your name", greetings.returnEmptyButtonsAndTextbox());

})

it("should be able to count the names greeted", function(){
    let greetings = greetMeInLangage();

    greetings.enterNameAndLanguage("Wiseman");
    greetings.enterNameAndLanguage("Linda");
    assert.equal(2, greetings.getMyCount());
});

it("should be able to count the names greeted but not twice", function(){
    let greetings = greetMeInLangage();

    greetings.enterNameAndLanguage("Wiseman");
    greetings.enterNameAndLanguage("Wiseman");
    greetings.enterNameAndLanguage("Linda");
    assert.equal(2, greetings.getMyCount());
});

it("should be able to greet a person in english when a person enters their name and count", function(){
    let greetings = greetMeInLangage();

    greetings.enterNameAndLanguage('Wiseman', "english");
    assert.equal(1, greetings.getMyCount());
    assert.equal( 'Hello, Wiseman' , greetings.returnChosenLanguage());
});

it("should be able to greet a person in isiXhosa when a person enters their name and count", function(){
    let greetings = greetMeInLangage();

    greetings.enterNameAndLanguage('Wiseman', "isiXhosa");
    assert.equal(1, greetings.getMyCount());
    assert.equal( 'Molo, Wiseman' , greetings.returnChosenLanguage());
});
it("should be able to greet a person in afrikaans when a person enters their name and count", function(){
    let greetings = greetMeInLangage();

    greetings.enterNameAndLanguage('Wiseman', "afrikaans");
    greetings.enterNameAndLanguage('Mabusela', "afrikaans");
    assert.equal(2, greetings.getMyCount());
    assert.equal( 'Hallo, Mabusela' , greetings.returnChosenLanguage());
});

it("should be able to greet a person in afrikaans when a person enters their name and count", function(){
    let greetings = greetMeInLangage();

    greetings.enterNameAndLanguage('Wiseman', "afrikaans");
    greetings.enterNameAndLanguage('Wiseman', "isiXhosa");
    assert.deepEqual( [ 1 ] , greetings.countEachName());

});

});