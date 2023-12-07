const { Reservation, Home, User } = require("../db");

export const getReservations = async () => {
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

export const getReservation = async (id) => {
  const reservation = await Reservation.findByPk({
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

export const getUserReservations = async (userId) => {
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
    { where: { "user.id": userId } }
  );
  return reservations;
};

export const getHomeReservations = async (homeId) => {
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

export const postReservation = async (reservation) => {
    const newReservation = await Reservation.create(reservation);
    return newReservation;
};

export const updateReservation = async (reservation) => {
    const newReservation = await Reservation.update(reservation, {where: {id: reservation.id}});
    return newReservation;
};
