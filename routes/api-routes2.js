const db = require();

module.exports = (app) => {
  app.get("/api/all"),
    (req, res) => {
      db.Post.findAll({}).then((dbPost) => res.json(dbPost));
    };
};

app.post("api/post", (req, res) => {
  console.log(req.body);
  db.Post.create({
    // ¯\_(ツ)_/¯
  }).then((dbPost) => res.json(dbPost));
});

app.delete("/api.posts/:id", (req, res) => {
  db.Post.destroy({
    // ¯\_(ツ)_/¯
  });
});
