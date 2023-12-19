const { Router } = require("express");
const { Home } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const homes = await getHomes();
    if (!homes.length) throw Error("There are no homes in DB");
    res.status(200).send(homes);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const home = await getHome(id);
    if (!home) res.status(404).send("Home doesn't exist");
    res.status(200).send(home);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const home = req.body;
  try {
    for (const property in home) {
      if (!home[property]) throw Error("Missing data");
    }
    const newHome = await createHome(home);
    res.status(200).send(newHome);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const home = req.body;
  try {
    for (const property in home) {
      if (!home[property]) throw Error("Missing data");
    }
    const newHome = await updateHome(home);
    res.status(200).send(newHome);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
