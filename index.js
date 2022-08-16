const express = require("express");
const exphbs = require("express-handlebars");//import the express-handlebars module
const bodyParser = require("body-parser")
const app = express();
const greetingNames = require("./greet.js")
const greetMe = greetingNames()



app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
//app.engine(ext, callback)
//The app.engine() function is used to register the given template engine callback as ext
app.set("view engine", "handlebars");

//Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's
app.use(express.static("public"));
//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified........app.use(path, callback)
//makes the public folder visible
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.render("index", {
      greeted: greetMe.returnChosenLanguage(),
      count: greetMe.getMyCount(),
      errMessage: greetMe.returnEmptyButtonsAndTextbox(),
    });

  });

app.post('/greetings', function (req, res) {
  console.log(req.body.name)
  console.log(req.body.languageTypeRadio)
  greetMe.enterNameAndLanguage(req.body.name, req.body.languageTypeRadio)
  greetMe.notCheckedbutton(req.body.name, req.body.languageTypeRadio)
  //greetMe.allmyLists(req.body.name)
  res.redirect("/");
});

app.get("/actions", function (req, res) {
  res.render('actions', {
                         nameAndCountList: greetMe.returnStoredInArray(),
      })
  });


  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });
    