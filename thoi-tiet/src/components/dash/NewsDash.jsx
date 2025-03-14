import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const categories = ['Dự báo', 'Cảnh báo', 'Mẹo vặt', 'Khí hậu', 'Thảm họa'];

export default function NewsDash() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/news") 
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setNewsData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addArticle = (newArticle) => {
    setNewsData([...newsData, newArticle]);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h1 className="fs-4 fw-bold mb-4">Danh sách Bài Viết</h1>
      <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#newsModal">Tạo tin tức mới</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((article, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={article.image || "https://via.placeholder.com/80x50"}
                    alt="Hình ảnh bài viết"
                    style={{ width: "80px", height: "50px", objectFit: "cover" }}
                  />
                </td>
                <td>{article.title}</td>
                <td>{article.category}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Sửa</button>
                  <button className="btn btn-danger btn-sm">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Bootstrap Modal */}
      <div className="modal fade" id="newsModal" tabIndex="-1" aria-labelledby="newsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newsModalLabel">Thêm tin tức mới</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* <ArticleForm onSubmit={addArticle} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
