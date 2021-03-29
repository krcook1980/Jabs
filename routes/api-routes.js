// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");
const { createReadStream } = require("fs");
const { response } = require("express");
const newUserId = []
const newVac1Id = []
const newVac2Id = []


module.exports = function (app) {
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
      where: {
        id: req.params.id
      }
    }).then((dbPost) => res.json(dbPost));
  });

  app.get("/api/race-graph/:race", (req, res) => {
   
     db.User.findAll({
      group: ['vaccine_type'],
      attributes: [
        [db.sequelize.fn('sum', db.sequelize.col('pain_at_site')), 'pain_at_site'],
        [db.sequelize.fn('sum', db.sequelize.col('fatigue')), 'fatigue'],
        [db.sequelize.fn('sum', db.sequelize.col('headache')), 'headache'],
        [db.sequelize.fn('sum', db.sequelize.col('muscle_soreness')), 'muscle_soreness'],
        [db.sequelize.fn('sum', db.sequelize.col('joint_pain')), 'joint_pain'],
        [db.sequelize.fn('sum', db.sequelize.col('nausea')), 'nausea'],
        [db.sequelize.fn('sum', db.sequelize.col('vomiting')), 'vomiting'],
        [db.sequelize.fn('sum', db.sequelize.col('chills')), 'chills'],
        [db.sequelize.fn('sum', db.sequelize.col('swelling')), 'swelling'],
        [db.sequelize.fn('sum', db.sequelize.col('rash')), 'rash'],
        [db.sequelize.fn('sum', db.sequelize.col('fever')), 'fever'],
        [db.sequelize.fn('sum', db.sequelize.col('severe_allergic_reaction')), 'severe_allergic_reaction'],
        [db.sequelize.fn('sum', db.sequelize.col('no_symptoms')), 'no_symptoms']
      ],
      logging: console.log,
      where: {
        race: req.params.race,
      },
      include: [
        {
          model: db.Vaccine, attributes: ['vaccine_type'],
          include: [
            {
              model: db.Symptom, attributes: [],
            }
          ]
        }
      ],
    }).then(data => {
    
     const userData = JSON.stringify(data)
     console.log ("I am from the db " + userData)
     res.json(data)
     
      // const yModerna = Object.values(stuff[0])
      // console.log("I am stuff " + stuff)
      // console.log(yModerna)
      // let yPfizer = testVar.map(function () {
      //   console.log(parseInt(testVar[1]));
      // });
      // let yJNJ = testVar.map(function () {
      //   console.log(parseInt(testVar[2]));
    });
  })

  app.post("api/race-graph/age", (req, res) => {
    db.User.findAll({
      group: ['vaccine_type'],
      attributes: [
        [db.sequelize.fn('sum', db.sequelize.col('pain_at_site')), 'pain_at_site'],
        [db.sequelize.fn('sum', db.sequelize.col('fatigue')), 'fatigue'],
        [db.sequelize.fn('sum', db.sequelize.col('headache')), 'headache'],
        [db.sequelize.fn('sum', db.sequelize.col('muscle_soreness')), 'muscle_soreness'],
        [db.sequelize.fn('sum', db.sequelize.col('joint_pain')), 'joint_pain'],
        [db.sequelize.fn('sum', db.sequelize.col('nausea')), 'nausea'],
        [db.sequelize.fn('sum', db.sequelize.col('vomiting')), 'vomiting'],
        [db.sequelize.fn('sum', db.sequelize.col('chills')), 'chills'],
        [db.sequelize.fn('sum', db.sequelize.col('swelling')), 'swelling'],
        [db.sequelize.fn('sum', db.sequelize.col('rash')), 'rash'],
        [db.sequelize.fn('sum', db.sequelize.col('fever')), 'fever'],
        [db.sequelize.fn('sum', db.sequelize.col('severe_allergic_reaction')), 'severe_allergic_reaction'],
        [db.sequelize.fn('sum', db.sequelize.col('no_symptoms')), 'no_symptoms']
      ],
      logging: console.log,
      where: {
        age: {
          [Op.between]: [req.params.age]
          },
      },
      include: [
        {
          model: db.Vaccine, attributes: ['vaccine_type'],
          include: [
            {
              model: db.Symptom, attributes: [],
            }
          ]
        }
      ],

    }).then(data => {
      //  const stuff = JSON.stringify(data) 
      res.json(data)
    }).catch(err => {
      console.log(err);
    });
  })

  app.get("api/race-graph/:sex", (req, res) => {
    db.User.findAll({
      group: ['vaccine_type'],
      attributes: [
        [db.sequelize.fn('sum', db.sequelize.col('pain_at_site')), 'pain_at_site'],
        [db.sequelize.fn('sum', db.sequelize.col('fatigue')), 'fatigue'],
        [db.sequelize.fn('sum', db.sequelize.col('headache')), 'headache'],
        [db.sequelize.fn('sum', db.sequelize.col('muscle_soreness')), 'muscle_soreness'],
        [db.sequelize.fn('sum', db.sequelize.col('joint_pain')), 'joint_pain'],
        [db.sequelize.fn('sum', db.sequelize.col('nausea')), 'nausea'],
        [db.sequelize.fn('sum', db.sequelize.col('vomiting')), 'vomiting'],
        [db.sequelize.fn('sum', db.sequelize.col('chills')), 'chills'],
        [db.sequelize.fn('sum', db.sequelize.col('swelling')), 'swelling'],
        [db.sequelize.fn('sum', db.sequelize.col('rash')), 'rash'],
        [db.sequelize.fn('sum', db.sequelize.col('fever')), 'fever'],
        [db.sequelize.fn('sum', db.sequelize.col('severe_allergic_reaction')), 'severe_allergic_reaction'],
        [db.sequelize.fn('sum', db.sequelize.col('no_symptoms')), 'no_symptoms']
      ],
      logging: console.log,
      where: {
        sex: req.params.sex,
      },
      include: [
        {
          model: db.Vaccine, attributes: ['vaccine_type'],
          include: [
            {
              model: db.Symptom, attributes: [],
            }
          ]
        }
      ],
    }).then(data => {
      //  const stuff = JSON.stringify(data) 
      res.json(data)
    });
  })

  app.post("/api/index", (req, res) => {
    // console.log(req.body);
    
    createSurvey(req, (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
    }
    res.status(200).end();
    })
    
     
    })

};

async function createSurvey(req, res) {
  //make new user
  const newUser = await db.User.create({      
    race: req.body[0].race,
    sex: req.body[0].sex,
    age: req.body[0].age,
  }).then((newUser1) => {
    console.log(newUser1.dataValues)
    //get user id
       newUserId.push(newUser1.dataValues.id)
       console.log("user 1 id " + newUserId[newUserId.length - 1])
     });
//make first shot vaccine
  const newVaccine1 = await db.Vaccine.create(
    {
    vaccine_type: req.body[1].vaccine_type,    
    shot_one: 1,
    shot_two: 0,
    createdAt: '?',
    updatedAt: '?',
    UserId: newUserId[newUserId.length - 1]
  }).then((newVac1) => {
    
    //get first shot id
       newVac1Id.push(newVac1.dataValues.id)
       console.log("vaccine 1 id " + newVac1Id[newVac1Id.length - 1])
     });
  
  //Make shot 2 vaccine
  const newVaccine2 = await db.Vaccine.create(
    {
    vaccine_type: req.body[1].vaccine_type,    
    shot_one: 0,
    shot_two: 1,
    UserId: newUserId[newUserId.length - 1]

  }).then((newVac2) => {
    
       newVac2Id.push(newVac2.dataValues.id)
     });
     

  // make first shot symptoms
  const newSymptom1 = await db.Symptom.create({
    pain_at_site: true,
    fatigue: true,
    headache: true,
    muscle_soreness: false,
    joint_pain: false,
    nausea: true,
    vomiting: false,
    chills: true,
    swelling: false,
    rash: false,
    fever: true,
    severe_allergic_reaction: false,
    no_symptoms: false,
    VaccineId: newVac1Id[newVac1Id.length - 1]
  });

    // make second shot symptoms
    const newSymptom2 = await db.Symptom.create({
      pain_at_site: true,
      fatigue: false,
      headache: false,
      muscle_soreness: false,
      joint_pain: false,
      nausea: true,
      vomiting: false,
      chills: true,
      swelling: false,
      rash: false,
      fever: true,
      severe_allergic_reaction: false,
      no_symptoms: false,
      VaccineId: newVac2Id[newVac2Id.length - 1]
    });
  // const newSymptom2 = await db.Symptom.create(req.body)
  console.log(await "newSurvey has been created")
}

