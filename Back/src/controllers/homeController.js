const { Home, User, Comment } = require("../db");

export const getHomes = async () => {
  const homes = await Home.findAll({
    include: [
      { model: User, attributes: ["id", "name", "surname", "image"] },
      { model: Comment, attributes: ["id", "rating", "message", "date"] },
    ],
  });
  return homes;
};

export const getHome = async (id) => {
  const home = await Home.findByPk(id, {
    include: [
      { model: User, attributes: ["id", "name", "surname", "image"] },
      { model: Comment, attributes: ["id", "rating", "message", "date"] },
    ],
  });
  return home;
};

export const postHome = async (home) => {
    const newHome = await Home.create(...home, image);
    return newHome;
};

export const updateHome = async (home) => {
    const newHome = await Home.update(home, {where: {id: home.id}});
    return newHome;
};
