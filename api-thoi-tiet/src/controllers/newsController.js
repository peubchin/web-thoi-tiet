const News = require('../models/News');
const path = require('path');
const fs = require('fs');

const newsController = {
  // Lấy danh sách tin tức
  getNews: async (req, res) => {
    try {
      const newsData = await News.find().sort({ createdAt: -1 });
      res.json(newsData);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi khi lấy dữ liệu', error: error.message });
    }
  },

  // Tạo tin tức mới
  createNews: async (req, res) => {
    try {
      const { title, description, category, link } = req.body;
      if (!title || !description || !category || !link) {
        return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
      }

      let imagePath = '';

      // Kiểm tra nếu có file được gửi lên
      if (req.files && req.files.image) {
        const image = req.files.image;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

        if (!allowedTypes.includes(image.mimetype)) {
          return res.status(400).json({ message: 'Chỉ hỗ trợ các định dạng ảnh: JPG, JPEG, PNG' });
        }

        const extension = path.extname(image.name);
        const filename = Date.now() + extension;
        imagePath = path.join(__dirname, '../uploads/', filename);

        // Di chuyển file ảnh vào thư mục uploads
        await image.mv(imagePath);
      }

      const newNews = new News({
        title,
        description,
        category,
        link,
        image: imagePath,
      });

      await newNews.save();
      res.status(201).json({ message: 'Tin tức đã được tạo thành công', data: newNews });
    } catch (error) {
      res.status(500).json({ message: 'Đã xảy ra lỗi', error: error.message });
    }
  }
};

module.exports = newsController;
