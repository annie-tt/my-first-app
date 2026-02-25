import './App.css'

function App() {
  return (
    <div className="container">
      {/* Ảnh đại diện */}
      <img 
  src="/me.jpg" 
  alt="Annie Avatar" 
  className="avatar" 
/>
      
      {/* Thông tin cá nhân */}
      <h1>Annie's Space</h1>
      <p>Chào mừng bạn đến với thế giới của mình! ✨</p>

      {/* Danh sách các nút */}
      <div className="links">
        <a href="https://facebook.com/cua-ban" target="_blank" className="link-card">
          Facebook
        </a>
        <a href="https://instagram.com/cua-ban" target="_blank" className="link-card">
          Instagram
        </a>
        <a href="https://zalo.me/so-cua-ban" target="_blank" className="link-card">
          Zalo của mình
        </a>
      </div>
    </div>
  )
}

export default App