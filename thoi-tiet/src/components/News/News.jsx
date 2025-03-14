import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  { id: 'forecast', name: 'Dự báo' },
  { id: 'warning', name: 'Cảnh báo' },
  { id: 'tips', name: 'Mẹo vặt' },
  { id: 'climate', name: 'Khí hậu' },
  { id: 'disaster', name: 'Thiên tai' },
];

export default function NewsCategories() {
  const [selectedCategory, setSelectedCategory] = useState('Cảnh báo');
  const[articles, setArticle]=useState([]);
  const[loading, setLoading]=useState(null);
  const[error, setError]=useState(null);

  useEffect(()=>{
    fetch("http://localhost:3000/news")
    .then((res)=> res.json())
    .then((data) => {
      setArticle(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

  const filteredArticles = articles.filter(
    (article) => article.category === selectedCategory
  );

  return (
    <div>
      <h2 className="mb-4">Tin tức</h2>

      {/* Thanh danh mục ngang */}
      <ul className="nav nav-pills">
        {categories.map((cat) => (
          <li
            className="nav-item"
            key={cat.name}
          >
            <button
              className={`nav-link ${
                selectedCategory === cat.name ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Danh sách bài viết */}
      <div className="container-fluid">
        <div className="row">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <a
                href={article.link}
                key={article.id}
                className="col-12 my-2 text-decoration-none"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="card-img-top rounded-top"
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text text-muted">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="text-center">Không có bài báo nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}
