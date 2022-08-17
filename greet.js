module.exports = function greetMeInLangage(){


    let giveMeName;
    let languageChoice;
    let count = 0;
    let returnForEmptyButtons;
    let counted = {};

    function resetAll(){
        counted = {}
     }
     function resetCount(){
        count = 0
     }
    function notCheckedbutton(nameIn, languageType){
        giveMeName = nameIn
        if(typeof window == 'undefined' && giveMeName == "" ){
            returnForEmptyButtons = "Please enter your name and choose a Language button";
        }
        else if(languageType == "english" || languageType == "afrikaans" || languageType == "isiXhosa" && giveMeName != "" ){
            returnForEmptyButtons = "";
        }
        else if(languageType != "english" || languageType != "afrikaans" || languageType != "isiXhosa" && giveMeName != "" ){
            returnForEmptyButtons = "Please choose a Language button";
        }
        if(giveMeName == '' && languageType == "english"){
            returnForEmptyButtons = "Please enter your name";
        }
        else if(giveMeName == '' &&  languageType == "afrikaans" ){
            returnForEmptyButtons = "Please enter your name";
        }
        else if(giveMeName == '' &&  languageType == "isiXhosa" ){
            returnForEmptyButtons = "Please enter your name";
        }
    }

    function enterNameAndLanguage(aNameIn, LanguageIn){
        giveMeName = aNameIn;
        let giveMeName2 = aNameIn.toUpperCase();
        let alphabet = /^[a-z A-Z]+$/;
        typeOfLanguage = LanguageIn;

        if (LanguageIn == "english" && giveMeName !=="" && alphabet.test(giveMeName )){
            languageChoice = "Hello, " + giveMeName;

           }

        else if(LanguageIn == "afrikaans" && giveMeName !=="" && alphabet.test(giveMeName )){
            languageChoice = "Hallo, " + giveMeName;

           }
        else  if (LanguageIn == "isiXhosa" && giveMeName !=="" && alphabet.test(giveMeName )){
            languageChoice = "Molo, " + giveMeName;

           }
        else if (returnEmptyButtonsAndTextbox =! ''){
                languageChoice = '';
        }
        if (counted[giveMeName2] == undefined && alphabet.test(giveMeName2)) {
            counted[giveMeName2] = 1;
          } else if (returnForEmptyButtons == '' && alphabet.test(giveMeName2)) {
            counted[giveMeName2] ++;
          }

        count = Object.keys(counted).length;
        greetedNames = Object.keys(counted);
        countOfNames = Object.values(counted);


    }
    function returnChosenLanguage(){
        return languageChoice;
    }
    function getMyCount(){
        return count;
    }
    function returnStoredInArray(){
            return counted;
    }
    function returnEmptyButtonsAndTextbox(){
        return returnForEmptyButtons;
    }
    function countEachName(){
        return countOfNames
    }
    function greetedNamesArray(){
        return greetedNames
    }
    return{
        enterNameAndLanguage,
        returnChosenLanguage,
        getMyCount,
        returnStoredInArray,
        notCheckedbutton,
        returnEmptyButtonsAndTextbox,
        countEachName,
        greetedNamesArray,
        resetAll,
        resetCount,
        //allmyLists
    }
}