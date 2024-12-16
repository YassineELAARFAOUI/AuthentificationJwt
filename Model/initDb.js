const bcrypt = require('bcrypt');
const AuthUser = require('../Model/authUser');

async function initializeDatabase() {
    // Utilisation de await dans une fonction async
    await AuthUser.sync({ force: true });

    // charger un userAuth
    bcrypt.hash('fouad', 10)
        .then(hash => {
            return AuthUser.create({
                username: 'fouad',
                password: hash
            });
        })
        .then(user => {
            console.log(user.toJSON());
        });
}

// Appel de la fonction
initializeDatabase();
