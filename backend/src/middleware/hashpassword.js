// eslint-disable-next-line import/no-extraneous-dependencies
const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body.data;
    const hashedPassword = await argon2.hash(password);

    req.body.data.hashedPassword = hashedPassword;
    delete req.body.data.password;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { hashPassword };
