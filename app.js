const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const Article = require('./src/models/Article');
const Comment = require('./src/models/Comment');
const app = express();
const port = 3001;

app.use(bodyParser.json());

db.sync().then(() => {
    app.listen(port, () => {
      console.log(`Le serveur est en cours d'exécution sur le port ${port}.`);
    });
  }).catch((err) => {
    console.error('Erreur de synchronisation:', err);
  });
