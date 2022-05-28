const { isEmail } = require('validator');
const { User } = require('../model');

module.exports = {
  createUser: async (req, res) => {
    const { username, email, role } = req.body;

    if (!isEmail(email)) {
      res.status(401).json({ error: 'Email must be a valid email address'});
    }
    try {
      const newUser = await User.create({
        username,
        email,
        role,
      });
      res.json(newUser);
    } catch (e) {
      res.json(e);
    }
  },
}