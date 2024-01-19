// Importez le module Express
const express = require('express');

// Créez une instance d'Express
const app = express();

// Définissez une route pour la racine de l'application
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Nouvelle route pour une fonctionnalité supplémentaire
app.get('/nouvelle-fonctionnalite', (req, res) => {
    res.send('Bienvenue sur la nouvelle fonctionnalité !');
});

// Écoutez le port 3000 (vous pouvez choisir un autre port si vous le souhaitez)
const port = 3000;
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
