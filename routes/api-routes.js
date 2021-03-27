// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.username,
      password: req.password
    });
  });

  
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.admin) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.username,
        id: req.id
      });
    }
  });

  app.post("/api/users", (req, res) => {
    console.log(req.body);
    db.User.create(req.body).then((dbPost) => res.json(dbPost));
  });


  app.delete("/api/users/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbPost => res.json(dbPost));
 
  })

  app.get("/api/users/:id", (req, res) => {
    db.User.findOne({
      where:{
        id: req.params.id
      }
    }).then((dbPost) => res.json(dbPost));
  });
};

const Jonathan = () => {
  db.User.findAll({
    attributes: ['id', [db.sequelize.fn('sum', db.sequelize.col('fever')), 'count']],
    group : [db.sequelize.col('Symptom.VaccineId')],
    where: {
    race: 'white'
},
  include: [
       {
      model: db.Vaccine,
      where: {
        vaccine_type: 'Pfizer'
      },
      include: [
        {
          model: db.Symptom,
          
          }
        
      ]
    }
  ],
   
}).then(res => console.log("I AM RIGHT HERE " + res));
}
 Jonathan()  
