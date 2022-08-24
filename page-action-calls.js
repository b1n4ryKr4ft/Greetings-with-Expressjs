const makeHttpRequest = (action, url) => {

    const xhttp = new XMLHttpRequest();

    xhttp.open(action, url, false);
    xhttp.send();

    return xhttp.responseText;
}

const loadLanguages = () => {

    var greetLanguages = makeHttpRequest("GET", "http://localhost:3000/languages");
    const languages = JSON.parse(greetLanguages);
    
    var languagesRadio = "";

    for(let lang of languages){
        const langStr = `
        <label class="">
            <input type="radio" name="languageTypeRadio" class="languageTypeRadio"
                value="${lang.name}">
            <span class="label-body">${lang.name}</span>
        </label>`

        languagesRadio += langStr;
    }

    var form = document.getElementById("greetingsForm");
    console.log(form)
    form.children[2].children[0].innerHTML = languagesRadio;
}

loadLanguages();