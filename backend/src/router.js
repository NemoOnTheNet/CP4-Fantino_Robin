const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const wordControllers = require("./controllers/wordControllers");
const CountryControlles = require("./controllers/countryControllers");
const UserController = require("./controllers/userController");
const authControllers = require("./controllers/authControllers");
const { hashPassword } = require("./middleware/hashpassword");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/word", wordControllers.browse);
router.get("/country", CountryControlles.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/word/:id", wordControllers.readBycountryId);
router.get("/country/:name", CountryControlles.readByName);
router.get("/word/team/:id", wordControllers.readByTeam);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/adduser", hashPassword, UserController.add);
router.post("/userplus", UserController.addbis);

router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
