const { Router } = require("express");
const { User } = require("../db");
const {
  getUsers,
  getUser,
  getUserByMail,
  updateUser,
  postUser,
} = require("../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    if (!users.length) throw Error("There are no users");
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (!user) res.status(404).send("User doesn't exist");
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/userByMail", async (req, res) => {
  const { mail } = req.query;

  try {
    if (!mail) throw new Error("There is no mail");

    const user = await getUserByMail(mail);
    if (!user) throw new Error(`There is no user with mail: ${mail} in DB.`);

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

/* router.get("/userByName", async (req, res) => {
  const { name, surname } = req.query;

  try {
    if (!name) throw new Error("There is no name");
    if (!surname) throw new Error("There is no surname");

    const user = await getUserByName(name, surname);
    if (!user)
      throw new Error(`There is no user with name: ${name} ${surname} in DB.`);

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}); */

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    for (const property in user) {
      if (!user[property]) throw new Error("Missing data");
    }
    const newUser = await postUser(user);

    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/", async (req, res) => {
  try {
    const user = req.body;
    for (const property in user) {
      if (!user[property]) throw new Error("Missing data");
    }
    const newUser = await updateUser(user);

    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
