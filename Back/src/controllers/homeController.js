const { Home, User, Comment } = require("../db");

const getHomes = async () => {
  const homes = await Home.findAll({
    include: [
      { model: User, attributes: ["id", "name", "surname", "image"] },
      { model: Comment, as: "comments", attributes: ["id", "rating", "message", "date"] },
    ],
  });
  return homes;
};

const getHome = async (id) => {
  const home = await Home.findByPk(id, {
    include: [
      { model: User, attributes: ["id", "name", "surname", "image"] },
      { model: Comment, as: "comments", attributes: ["id", "rating", "message", "date"] },
    ],
  });
  return home;
};

const postHome = async (home) => {
    const newHome = await Home.create(...home, image);
    return newHome;
};

const updateHome = async (home) => {
    const newHome = await Home.update(home, {where: {id: home.id}});
    return newHome;
};

module.exports = {
  getHomes,
  getHome,
  postHome,
  updateHome
}
