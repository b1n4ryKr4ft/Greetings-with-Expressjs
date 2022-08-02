function greetMeInLangage(storedNameList, storingCount){


    let giveMeName = 0;
    let languageChoice = 0;
    let count = 0;
    if(typeof(storingCount) == 'number'){
        count = storingCount
    }
    let returnForEmptyButtons = 0;
    let greetedNamesArray = [];
    if(Array.isArray(storedNameList) == true){
        greetedNamesArray = storedNameList
    }


    function notCheckedbutton(emptyRadio){
        if(emptyRadio && giveMeName == "" ){
            returnForEmptyButtons = "Please enter your name and choose a Language button";
        }
        else if(emptyRadio && giveMeName != "" ){
         returnForEmptyButtons = "Please choose a Language button"
         }
    }
    function enterNameAndLanguage(aNameIn, LanguageIn){
        giveMeName = aNameIn;
         if(giveMeName == '' && LanguageIn == "english"){
            languageChoice = "Please enter your name";
         }
        else if(giveMeName == '' &&  LanguageIn == "afrikaans" ){
            languageChoice = "Please enter your name";
         }
        else if(giveMeName == '' &&  LanguageIn == "isiXhosa" ){
            languageChoice = "Please enter your name";
         }
        else if (LanguageIn == "english" && giveMeName !==""){
            languageChoice = "Hello, " + giveMeName;
           }

        else if(LanguageIn == "afrikaans" && giveMeName !==""){
            languageChoice = "Hallo, " + giveMeName;
           }
        else  if (LanguageIn == "isiXhosa" && giveMeName !==""){
            languageChoice = "Molo, " + giveMeName;
           }
        if (giveMeName != 0 && !greetedNamesArray.includes(giveMeName.toUpperCase())){
            greetedNamesArray.push(giveMeName.toUpperCase());
            count += 1
           }
    }
    function getZeroCount(){
        count = 0;
        return count;
    }
    function getEmptyArray(){
        greetedNamesArray = []
        return greetedNamesArray;
    }
    function returnName(){
        return giveMeName;
    }
    function returnChosenLanguage(){
        return languageChoice;
    }
    function returnLanguage(){
         languageChoice = '.'
         return languageChoice;
    }
    function getMyCount(){
        return count;
    }
    function notCheckedLanguage(){
        return returnForEmptyButtons
    }
    function returnStoredInArray(){
        return greetedNamesArray
    }
    return{
        enterNameAndLanguage,
        returnChosenLanguage,
        returnLanguage,
        returnName,
        getMyCount,
        notCheckedbutton,
        notCheckedLanguage,
        returnStoredInArray,
        getZeroCount,
        getEmptyArray

    }
}