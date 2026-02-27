import './App.css';
import { portfolioData } from './data';

function App() {
  return (
    <div className="container">
      {/* Phần Header: Avatar và Tên */}
      <img src={portfolioData.avatar} alt="avatar" className="avatar" />
      <h1 style={{ marginTop: '15px' }}>{portfolioData.name}</h1>
      <p style={{ color: '#666' }}>{portfolioData.title}</p>

      {/* Phần Links: Tự động lặp qua danh sách dữ liệu */}
      <div className="links">
        {portfolioData.links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-card"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;