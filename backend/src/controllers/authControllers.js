/* eslint-disable import/no-extraneous-dependencies */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.data.mail);

    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(user.password, req.body.data.password);
    if (verified) {
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.password;
      const token = jwt.sign(
        { sub: user.id, isAdmin: user.isAdmin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("access_token", token, {
        httpOnly: true,
        secure: false,
      });
      res.status(200).json({
        email: user.email,
        id: user.id,
        pseudo: user.pseudo,
        role: user.role,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    console.error(err);
    next();
  }
};

const logout = ({ res }) => {
  res.clearCookie("access_token").sendStatus(200);
};
module.exports = {
  login,
  logout,
};
