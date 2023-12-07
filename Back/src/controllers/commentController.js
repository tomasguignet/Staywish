const { Comment, Reservation, Home, User } = require("../db");

export const getComments = async () => {
  const comments = await Comment.findAll({
    include: [
      { model: User, attributes: ["id", "name", "surname", "image"] },
      { model: Home, attributes: ["id", "title"] },
      { model: Reservation, attributes: ["id"] },
    ],
  });
  return comments;
};

export const getUserComments = async (userId) => {
  const comments = await Comment.findAll(
    {
      include: [
        { model: Home, attributes: ["id", "title"] },
        { model: Reservation, attributes: ["id"] },
        { model: User, attributes: ["id", "name", "surname", "image"] },
      ],
    },
    { where: { "user.id": userId } }
  );
  return comments;
};

export const getHomeComments = async (homeId) => {
  const comments = await Comment.findAll(
    {
      include: [
        { model: User, attributes: ["id", "name", "surname", "image"] },
        { model: Reservation, attributes: ["id"] },
        { model: Home, attributes: ["id", "title"] },
      ],
    },
    { where: { "home.id": homeId } }
  );
  return comments;
};

export const getHostComments = async (hostId) => {
  const comments = await Comment.findAll(
    {
      include: [
        { model: User, attributes: ["id", "name", "surname", "image"] },
        {
          model: Home,
          attributes: ["id", "title"],
          include: [{ model: User, attributes: ["id", "name", "surname"] }],
        },
        { model: Reservation, attributes: ["id"] },
      ],
    },
    { where: { "home.user.id": hostId } }
  );
  return comments;
};

export const getHostRating = async (hostId) => {
  const { count, rows } = await Comment.findAndCountAll(
    {
      attributes: ["rating"],
      include: [
        {
          model: Home,
          attributes: ["id"],
          include: [{ model: User, attributes: ["id"] }],
        },
      ],
    },
    { where: { "home.user.id": hostId } }
  );
  //Tengo que ver el formato de la respuesta rows
  const sum = rows.reduce((total, value) => total + value, 0);
  const rating = sum/count;
  return rating;
};

export const postComment = async (comment) => {
  const newComment = await Comment.create(comment);
  return newComment;
};

export const updateComment = async (comment) => {
  const newComment = await Comment.update(comment, {
    where: { id: comment.id },
  });
  return newComment;
};
