const express = require("express");
const News = require("../models/News");
const newsController = require("../controllers/newsController");

const newsRouter = express.Router();

// API lấy tất cả bài viết
newsRouter.get("/", newsController.getNews);

// API lấy bài viết theo danh mục
newsRouter.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const news = await News.find({ category });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server" });
  }
});


module.exports = newsRouter;
