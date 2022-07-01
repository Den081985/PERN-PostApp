const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/models");

class UserController {
  async register(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(500).json({ message: "No email or password" });
      }

      let candidate = await User.findOne({ where: { email: email } });

      if (candidate) {
        return res.status(500).json({ message: "Such user is already exists" });
      }

      const hashed_password = await bcrypt.hash(password, 5);

      let user = await User.create({ email, password: hashed_password });

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });

      return res.status(201).json({ token });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(500).json({ message: "No email or password" });
      }

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(404).json({ message: "There is no such user" });
      }

      const compared_password = bcrypt.compareSync(password, user.password);

      if (!compared_password) {
        return res.status(500).json({ message: "Incorrect password" });
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async check_auth(req, res) {
    const token = jwt.sign({ id: req.user.id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.status(200).json({ token });
  }
}

module.exports = new UserController();
