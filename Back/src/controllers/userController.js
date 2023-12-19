const { User, Comment, Home, Reservation } = require("../db");

const getUsers = async () => {
  const users = await User.findAll({
    include: [
      { model: Home, as: "homes", attributes: ["id", "title"] },
      { model: Reservation, as: "reservations", attributes: ["id"] },
      { model: Comment, as: "comments", attributes: ["id", "message"] },
    ],
  });
  return users;
};

const getUser = async (id) => {
  const user = await User.findByPk(id, {
    include: [
      { model: Home, as: "homes", attributes: ["id", "title"] },
      { model: Reservation, as: "reservations", attributes: ["id"] },
      { model: Comment, as: "comments", attributes: ["id", "message"] },
    ],
  });
  return user;
};

const getUserByMail = async (mail) => {
  const user = await User.findOne({ where: { mail: { mail } } });
  return user;
};

const postUser = async (user) => {
  const newUser = await User.create({ ...user, image: user.image });
  return newUser;
};

const updateUser = async (user) => {
  const newUser = await User.update(user, { where: { id: user.id } });
  return newUser;
};

module.exports = {
  getUsers,
  getUser,
  getUserByMail,
  postUser,
  updateUser
}
