// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");


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

  // app.post("/api/race-graph/race", (req, res) => {
  //   res.json(req.body);
  
  app.post("/api/race-graph/race", (req, res) => {
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
      //  const stuff = JSON.stringify(data) 
      res.json(data)
    });
  })

  app.get("api/race-graph/:age", (req, res) => {
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

  async function createSurvey(req, res) {
    const newUser = await db.User.create({      
      race: req.body[0].race,
      sex: req.body[0].sex,
      age: req.body[0].age,});

    const newVaccine1 = await db.Vaccine.create(
      {
      vaccine_type: req.body[1].vaccine_type,    
      shot_one: 1,
      shot_two: 0,
    });

    // const newVaccine2 = await db.Vaccine.create(req.body)
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
      no_symptoms: false
    });
    // const newSymptom2 = await db.Symptom.create(req.body)
    console.log(await "newSurvey has been created")
  }

  app.post('/api/index', (req, res) => {
    console.log(req.body);
    createSurvey(req, (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
    }
    res.status(200).end();
    });
    // const userInfo = req.body
//     db.User.create({
      
//       race: req.body[0].race,
//       sex: req.body[0].sex,
//       age: req.body[0].age,

//       Vaccine: {
//         vaccine_type: req.body[1].vaccine_type,    
//         shot_one: 1,
//         shot_two: 0,

//       Symptom: [{
//         pain_at_site: true,
//         fatigue: true,
//         headache: true,
//         muscle_soreness: false,
//         joint_pain: false,
//         nausea: true,
//         vomiting: false,
//         chills: true,
//         swelling: false,
//         rash: false,
//         fever: true,
//         severe_allergic_reaction: false,
//         no_symptoms: false
//       }]
//     }, 
//   },{
//       include: [{
//         association: db.Vaccine.User,
//         include: [db.Vaccine.Symptom]
//       }]
//     }).then((dbUser) => {res.json(dbUser)
//   console.log('******* We Did It?****' + dbUser)
// });
  });
  //     .then((dbUser) => {(dbUser.id)
  //     console.log(dbUser.id)
  //     let newUserId = dbUser.id;
  //     db.Vaccine.create({
  //       vaccine_type: 'Pfizer',    
  //       shot_one: 1,
  //       shot_two: 0,
  //       UserId: newUserId
  //     }).then((dbVac1) => {(dbVac1.UserId)
  //       let Vac1 = dbVac1.UserId
  //       db.Vaccine.create({
  //         vaccine_type: 'Pfizer',    
  //         shot_one: 0,
  //         shot_two: 1,
  //       }).then((dbVac2, Vac1) => {(dbVac2.UserId)
  //         console.log('*******Hey I AM DBVAC******' + Vac1);
  //       });
  //     });
      
  //   });
  // });

};





// const Jonathan = () => {
//   db.User.findAll({
//     group: ['vaccine_type'],
//     attributes: [
//       [db.sequelize.fn('sum', db.sequelize.col('pain_at_site')), 'pain_at_site'],
//       [db.sequelize.fn('sum', db.sequelize.col('fatigue')), 'fatigue'],
//       [db.sequelize.fn('sum', db.sequelize.col('headache')), 'headache'],
//       [db.sequelize.fn('sum', db.sequelize.col('muscle_soreness')), 'muscle_soreness'],
//       [db.sequelize.fn('sum', db.sequelize.col('joint_pain')), 'joint_pain'],
//       [db.sequelize.fn('sum', db.sequelize.col('nausea')), 'nausea'],
//       [db.sequelize.fn('sum', db.sequelize.col('vomiting')), 'vomiting'],
//       [db.sequelize.fn('sum', db.sequelize.col('chills')), 'chills'],
//       [db.sequelize.fn('sum', db.sequelize.col('swelling')), 'swelling'],
//       [db.sequelize.fn('sum', db.sequelize.col('rash')), 'rash'],
//       [db.sequelize.fn('sum', db.sequelize.col('fever')), 'fever'],
//       [db.sequelize.fn('sum', db.sequelize.col('severe_allergic_reaction')), 'severe_allergic_reaction'],
//       [db.sequelize.fn('sum', db.sequelize.col('no_symptoms')), 'no_symptoms']
//     ],
//     logging: console.log,
//     where: {
//       age: {
//         [Op.between]: ['20','80']
//         },
//     },
//     include: [
//       {
//         model: db.Vaccine, attributes: ['vaccine_type'],


//         include: [
//           {
//             model: db.Symptom, attributes: [],

//           }

//         ]
//       }
//     ],

//   }).then(data => {
//     const stuff = JSON.stringify(data)
//     // res.json(data)
//     console.log("*********************WHATTTTTT " + data)
//     console.log("*********************I AM RIGHT HERE " + stuff)
//   });
// }
// // Jonathan()
