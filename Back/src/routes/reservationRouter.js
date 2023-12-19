const { Router } = require("express");
const { Reservation } = require("../db");
const {
  getReservation,
  getReservations,
  getHomeReservations,
  getUserReservations,
  postReservation,
  updateReservation,
} = require("../controllers/reservationController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const reservations = await getReservations();
    if (!reservations.length) throw Error("There are no reservations in DB");
    res.status(200).send(reservations);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await getReservation(id);
    if (!reservation) res.status(404).send("Reservation doesn't exist");
    res.status(200).send(reservation);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/userReservations/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const reservations = await getUserReservations(userId);
    if (!reservations) res.status(404).send("User doesn't have reservations");
    res.status(200).send(reservations);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/homeReservations/:homeId", async (req, res) => {
  const { homeId } = req.params;
  try {
    const reservations = await getHomeReservations(homeId);
    if (!reservations) res.status(404).send("Home doesn't have reservations");
    res.status(200).send(reservations);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const reservation = req.body;
  try {
    for (const property in reservation) {
      if (!reservation[property]) throw Error("Missing data");
    }
    const newReservation = await postReservation(reservation);
    res.status(200).send(newReservation);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const reservation = req.body;
  try {
    for (const property in reservation) {
      if (!reservation[property]) throw Error("Missing data");
    }
    const newReservation = await updateReservation(reservation);
    res.status(200).send(newReservation);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
