module.exports = function greetMeInLangage(){


    let giveMeName;
    let languageChoice;
    let count = 0;
    let greetedNamesArray = [];
    let returnForEmptyButtons;



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
        if (LanguageIn == "english" && giveMeName !==""){
            languageChoice = "Hello, " + giveMeName;
            if (!greetedNamesArray.includes(giveMeName.toUpperCase())){
                greetedNamesArray.push(giveMeName.toUpperCase());
                count = greetedNamesArray.filter(word => word !== '').length;
               }
           }

        else if(LanguageIn == "afrikaans" && giveMeName !==""){
            languageChoice = "Hallo, " + giveMeName;
            if (!greetedNamesArray.includes(giveMeName.toUpperCase())){
                greetedNamesArray.push(giveMeName.toUpperCase());
                count = greetedNamesArray.filter(word => word !== '').length;
               }
           }
        else  if (LanguageIn == "isiXhosa" && giveMeName !==""){
            languageChoice = "Molo, " + giveMeName;
            if (!greetedNamesArray.includes(giveMeName.toUpperCase())){
                greetedNamesArray.push(giveMeName.toUpperCase());
                count = greetedNamesArray.filter(word => word !== '').length;
               }
           }
        else if (returnEmptyButtonsAndTextbox =! ''){
                languageChoice = '';
        }
    }
    function getZeroCount(){
        count = 0;
        return count;
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
    function returnStoredInArray(){
        return greetedNamesArray
    }
    function returnEmptyButtonsAndTextbox(){
        return returnForEmptyButtons
    }
    return{
        enterNameAndLanguage,
        returnChosenLanguage,
        returnLanguage,
        returnName,
        getMyCount,
        returnStoredInArray,
        getZeroCount,
        notCheckedbutton,
        returnEmptyButtonsAndTextbox,
    }
}