const mongoose = require("mongoose");
const News = require('../../models/News');

const newsData = [
  {
    title: "Dự báo thời tiết tuần tới",
    description: "Nhiệt độ trung bình sẽ tăng nhẹ...",
    category: "Dự báo",
    image: "/assets/img/news/du-bao-thoi-tiet.jpg",
    link: "https://edition.cnn.com/2025/03/10/china/two-sessions-china-key-takeaways-intl-hnk/index.html",
  },
  {
    title: "Không khí lạnh sắp về miền Bắc",
    description: "Nhiệt độ giảm mạnh, trời trở rét...",
    category: "Dự báo",
    image: "/assets/img/news/thoi-tiet-lanh.jpg",
    link: "https://edition.cnn.com/2025/03/10/china/two-sessions-china-key-takeaways-intl-hnk/index.html",
  },
  {
    title: "Miền Trung có mưa lớn kéo dài",
    description: "Mưa sẽ tiếp diễn trong nhiều ngày tới...",
    category: "Dự báo",
    image: "/assets/img/news/mua-lon.jpg",
    link: "https://edition.cnn.com/2025/03/10/china/two-sessions-china-key-takeaways-intl-hnk/index.html",
  },
  {
    title: "Bão số 5 sắp vào miền Trung",
    description: "Cơn bão mạnh đang tiến gần bờ...",
    category: "Cảnh báo",
    image: "/assets/img/news/bao-mien-trung.jpg",
    link: "https://edition.cnn.com/2025/03/10/china/two-sessions-china-key-takeaways-intl-hnk/index.html",
  },
  {
    title: "Cảnh báo lũ quét ở vùng núi",
    description: "Nguy cơ sạt lở đất rất cao do mưa lớn...",
    category: "Cảnh báo",
    image: "/assets/img/news/lu-quet.jpg",
    link: "https://edition.cnn.com/2025/03/10/china/two-sessions-china-key-takeaways-intl-hnk/index.html",
  },
  {
    title: "Nắng nóng gay gắt tại miền Nam",
    description: "Nhiệt độ có thể lên đến 40 độ C...",
    category: "Cảnh báo",
    image: "/assets/img/news/nang-nong.jpg",
    link: "https://edition.cnn.com/2025/03/10/china/two-sessions-china-key-takeaways-intl-hnk/index.html",
  },
  {
    title: "Cách tránh sốc nhiệt mùa hè",
    description: "Để bảo vệ sức khỏe, bạn nên...",
    category: "Mẹo vặt",
    image: "/assets/img/news/cach-tranh-soc-nhiet.jpg",
  },
  {
    title: "Làm gì khi gặp sấm sét?",
    description: "Tránh xa các vật kim loại và trú ẩn an toàn...",
    category: "Mẹo vặt",
    image: "/assets/img/news/sam-set.jpg",
  },
  {
    title: "Mẹo giúp nhà luôn mát mẻ",
    description: "Dùng rèm cửa và cây xanh để giảm nhiệt...",
    category: "Mẹo vặt",
    image: "/assets/img/news/nha-mat-me.jpg",
  },
  {
    title: "Biến đổi khí hậu ảnh hưởng ra sao?",
    description: "Mức CO2 trong không khí tăng cao...",
    category: "Khí hậu",
    image: "/assets/img/news/bien-doi-khi-hau.jpg",
  },
  {
    title: "Hiệu ứng nhà kính ngày càng nghiêm trọng",
    description: "Nhiệt độ toàn cầu đang tăng nhanh...",
    category: "Khí hậu",
    image: "/assets/img/news/hieu-ung-nha-kinh.jpg",
  },
  {
    title: "Băng tan nhanh ở Bắc Cực",
    description: "Các dòng sông băng đang biến mất nhanh chóng...",
    category: "Khí hậu",
    image: "/assets/img/news/bang-tan.jpg",
  },
  {
    title: "Động đất mạnh tại Nhật Bản",
    description: "Trận động đất 7.2 độ richter...",
    category: "Thảm họa",
    image: "/assets/img/news/dong-dat-nhat-ban.jpg",
  },
  {
    title: "Sạt lở đất nghiêm trọng ở miền núi",
    description: "Mưa lớn kéo dài gây sạt lở nghiêm trọng...",
    category: "Thảm họa",
    image: "/assets/img/news/sat-lo.jpg",
  },
  {
    title: "Núi lửa phun trào tại Hawaii",
    description: "Dung nham đang lan rộng, người dân cần sơ tán...",
    category: "Thảm họa",
    image: "/assets/img/news/nui-lua-hawaii.jpg",
  }
];


const newsSeed = async () => {
  await News.deleteMany({});
  await News.insertMany(newsData);
  console.log("Seeder dữ liệu tin tức thành công!");
  mongoose.connection.close();
};
module.exports=newsSeed

