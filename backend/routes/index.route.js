const express = require("express");
const router = express.Router();

// const authRouter = require("./auth.route");
// const itemsRouter = require("./items.route");
// const userRouter = require("./user.route");
// const foodsRouter = require("./foods.route");

const app = require("../app");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    response: "ok",
  });
});

// router.use("/auth", authRouter);
// router.use("/items", itemsRouter);
// router.use("/user", userRouter);
// router.use("/foods", foodsRouter);

module.exports = router;
