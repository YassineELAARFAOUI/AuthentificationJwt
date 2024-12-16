const AuthUser = require('../Model/authUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // le module pour JWT
const privatekey = require('../auth/private_key');

const loginController = {
  login: async (req, res) => {
    AuthUser.findOne({ where: { username: req.body.username } })
      .then(user => {
        if (!user) {
          const message = `L'utilisateur n'existe pas.`;
          return res.status(404).json({ message });
        }
        bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
          if (!isPasswordValid) {
            const message = `Le mot de passe est invalide.`;
            return res.status(404).json({ message });
          }
          // JWT
          const token = jwt.sign(
            { userId: user.id },
            privatekey,
            { expiresIn: '24h' }
          );
          const message = `L'utilisateur a été connecté avec succès.`;
          return res.json({ message, data: user, token });
        });
      })
      .catch(error => {
        const message = `Vous n'avez pas été connecté. Réessayez dans quelques instants.`;
        return res.status(500).json({ message, data: error });
      });
  }
};

module.exports = loginController;
