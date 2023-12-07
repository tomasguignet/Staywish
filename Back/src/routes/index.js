const {Router} = require("express");
const router = Router();

const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const homeRouter = require("./homeRouter");
const reservationRouter = require("./reservationRouter");
const commentRouter = require("./commentRouter");


router.use("/user", userRouter);
router.use("/home", homeRouter);
router.use("/reservation", reservationRouter);