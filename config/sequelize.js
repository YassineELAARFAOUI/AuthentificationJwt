const { Sequelize } = require('sequelize');

// des param de data Base
const sequelize = new Sequelize('bibliotheque', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', 
});

// Test de connection
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données MySQL réussie.'))
    .catch(err => console.error('Erreur de connexion à la base de données:', err));

module.exports = { sequelize };