const express = require("express");
const exphbs = require("express-handlebars");//import the express-handlebars module
const bodyParser = require("body-parser")
const app = express();
const greetingNames = require("./greet.js")
const greetMe = greetingNames()
const dbQueries = require('./db-queries')



app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
//app.engine(ext, callback)
//The app.engine() function is used to register the given template engine callback as ext
app.set("view engine", "handlebars");

//Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's
app.use(express.static("public"));
//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified........app.use(path, callback)
//makes the public folder visible
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    res.render("index", {
      languages: await dbQueries.getGreetingLanguages(),
      count: await dbQueries.getGreetingsCounter(),
      greeted: greetMe.returnChosenLanguage(),
      errMessage: greetMe.returnEmptyButtonsAndTextbox(),
    });

  });

app.post('/greetings', function (req, res) {
  greetMe.enterNameAndLanguage(req.body.name, req.body.languageTypeRadio)
  greetMe.notCheckedbutton(req.body.name, req.body.languageTypeRadio)
   res.redirect("/");
});

app.post("/reset", function (req, res) {
  greetMe.resetAll();
  greetMe. resetCount();
  greetMe.resetError();
  greetMe.resetGreeting()
  res.redirect("/");
  });

app.get("/actions", function (req, res) {

  res.render('actions', {
    nameAndCountList: greetMe.returnStoredInArray(),
  })
});

app.get("/namesGreeted/:name", function (req, res) {
  let countOfName;
  let myName = req.params.name;
  if (greetMe.returnStoredInArray()[myName] == 1){
   countOfName = greetMe.returnStoredInArray()[myName] + ' time'
  }
   else if (greetMe.returnStoredInArray()[myName] > 1){
   countOfName = greetMe.returnStoredInArray()[myName] + ' times'
    }

  res.render('nameGreeted', {
      myNames: myName,
      countsOfEach: countOfName,
})
  });


  app.listen(process.env.PORT || 3000, function(){
    console.log(`Express server listening on port ${this.address().port} in ${app.settings.env} mode`);
    });
