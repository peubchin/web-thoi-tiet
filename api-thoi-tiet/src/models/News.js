const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema(
  {
    title: String, // Tiêu đề bài viết
    description: String, // Mô tả ngắn
    category: {
      type: String,
      enum: ['Dự báo', 'Cảnh báo', 'Mẹo vặt', 'Khí hậu', 'Thảm họa'], // Các danh mục hợp lệ
      required: true,
    },
    image: String, // Link ảnh minh họa
    link: String, // Link bài viết gốc
    createdAt: { type: Date, default: Date.now }, // Ngày đăng
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

NewsSchema.virtual('imageUrl').get(function () {
  return this.image
    ? `${process.env.BASE_URL}/public/uploads/${this.image}`
    : null;
});

module.exports = mongoose.model('News', NewsSchema);