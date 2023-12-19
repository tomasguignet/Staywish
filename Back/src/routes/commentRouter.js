const { Router } = require("express");
const { Comment } = require("../db");
const {
  getComments,
  getHomeComments,
  getHostComments,
  getHostRating,
  getUserComments,
  postComment,
  updateComment,
} = require("../controllers/commentController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const comments = await getComments();
    if (!comments.length) throw Error("There are no comments in DB");
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/userComments/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const comments = await getUserComments(userId);
    if (!comments) res.status(404).send("User doesn't have comments");
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/homeComments/:homeId", async (req, res) => {
  const { homeId } = req.params;
  try {
    const comments = await getHomeComments(homeId);
    if (!comments) res.status(404).send("Home doesn't have comments");
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const comment = req.body;
  try {
    for (const property in comment) {
      if (!comment[property]) throw Error("Missing data");
    }
    const newComment = await postComment(comment);
    res.status(200).send(newComment);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const comment = req.body;
  try {
    for (const property in comment) {
      if (!comment[property]) throw Error("Missing data");
    }
    const newComment = await updateComment(comment);
    res.status(200).send(newComment);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
