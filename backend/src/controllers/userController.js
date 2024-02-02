// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const word = await tables.word.readAll();

    // Respond with the items in JSON format

    res.json(word);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.item.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readBycountryId = async (req, res, next) => {
  try {
    const words = await tables.word.readById(req.params.id);
    if (words == null) {
      res.sendStatus(404);
    } else {
      res.json(words);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByTeam = async (req, res, next) => {
  try {
    const words = await tables.word.readByTeamId(req.params.id);

    if (words == null) {
      res.sendStatus(404);
    } else {
      res.json(words);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const myUser = req.body.data;
  const { hashedPassword } = req.body;

  try {
    const user = await tables.user.create(myUser, hashedPassword);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const addbis = async (req, res, next) => {
  const myUser = req.body;
  try {
    const user = await tables.user.createbis(myUser);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  readBycountryId,
  readByTeam,
  // edit,
  add,
  addbis,
  // destroy,
};
