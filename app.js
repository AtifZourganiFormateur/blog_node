const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const Article = require('./src/models/Article');
const Comment = require('./src/models/Comment');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/test', (req,res) => {
  res.json('test')
})
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: {
        model: Comment,
        attributes: ['id', 'contenu', 'created']
      },
      order: [['created', 'DESC']]
    });
    res.json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue' });
  }
});

db.sync().then(() => {
    app.listen(port, () => {
      console.log(`Le serveur est en cours d'exécution sur le port ${port}.`);
    });
  }).catch((err) => {
    console.error('Erreur de synchronisation:', err);
  });
 