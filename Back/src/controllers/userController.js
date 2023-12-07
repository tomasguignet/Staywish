const { User, Comment, Home, Reservation } = require("../db");

export const getUsers = async () => {
  const users = await User.findAll({
    include: [
      { model: Home, attributes: ["id", "title"] },
      { model: Reservation, attributes: ["id"] },
      { model: Comment, attributes: ["id", "message"] },
    ],
  });
  return users;
};

export const getUser = async (id) => {
  const user = await User.findByPk(id, {
    include: [
      { model: Home, attributes: ["id", "title"] },
      { model: Reservation, attributes: ["id"] },
      { model: Comment, attributes: ["id", "message"] },
    ],
  });
  return user;
};

export const getUserByMail = async (mail) => {
  const user = await User.findOne({ where: { mail: { mail } } });
  return user;
};

export const createUser = async (user) => {
  const newUser = await User.create({ ...user, image: image });
  return newUser;
};

export const updateUser = async (user) => {
  const newUser = await User.update(user, { where: { id: user.id } });
  return newUser;
};
