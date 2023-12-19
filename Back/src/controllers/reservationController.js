const { Reservation, Home, User } = require("../db");

const getReservations = async () => {
  const reservations = await Reservation.findAll({
    include: [
      { model: User, attributes: ["id", "name", "surname"] },
      {
        model: Home,
        attributes: ["id", "title"],
        include: [{ model: User, attributes: ["id", "name", "surname"] }],
      },
    ],
  });
  return reservations;
};

const getReservation = async (id) => {
  const reservation = await Reservation.findByPk(id, {
    include: [
      { model: User, attributes: ["id", "name", "surname"] },
      {
        model: Home,
        attributes: ["id", "title"],
        include: [{ model: User, attributes: ["id", "name", "surname"] }],
      },
    ],
  });
  return reservation;
};

const getUserReservations = async (userId) => {
  const reservations = await Reservation.findAll(
    {
      include: [
        { model: User, attributes: ["id", "name", "surname"] },
        {
          model: Home,
          attributes: ["id", "title"],
          include: [{ model: User, attributes: ["id", "name", "surname"] }],
        },
      ],
    },
    { where: { "home.user.id": userId } }
  );
  return reservations;
};

const getHomeReservations = async (homeId) => {
  const reservations = await Reservation.findAll(
    {
      include: [
        { model: User, attributes: ["id", "name", "surname"] },
        {
          model: Home,
          attributes: ["id", "title"],
          include: [{ model: User, attributes: ["id", "name", "surname"] }],
        },
      ],
    },
    { where: { "home.id": homeId } }
  );
  return reservations;
};

const postReservation = async (reservation) => {
  const newReservation = await Reservation.create(reservation);
  return newReservation;
};

const updateReservation = async (reservation) => {
  const newReservation = await Reservation.update(reservation, {
    where: { id: reservation.id },
  });
  return newReservation;
};

module.exports = {
  getReservations,
  getReservation,
  getHomeReservations,
  getUserReservations,
  postReservation,
  updateReservation,
};
