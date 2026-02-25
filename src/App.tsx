import { useState } from 'react' // 1. Nhập công cụ quản lý trạng thái

function App() {
  // 2. Khai báo State (Trạng thái)
  // count: giá trị hiện tại, setCount: hàm để thay đổi giá trị đó
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>ANNIE FIRST WEB APP 🚀</h1>
      
      <p style={{ fontSize: '24px' }}>
        Số hiện tại là: <strong style={{ color: count > 5 ? 'red' : 'blue',
fontSize: 24 + count * 2 + 'px' }}>{count}</strong>
      </p>


<div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
  <button 
  onClick={() => setCount(count + 1)}
  style={{ padding: '10px 15px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}
>
  Tăng số
</button>
  <button onClick={() => setCount(count - 1)}
style={{ padding: '10px 15px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}
>
Giảm số
</button>
  <button onClick={() => setCount(0)}style={{ padding: '10px 15px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}
>
Reset
</button> 
</div>

      <p>{count > 5 ? "🔥 Bạn bấm hơi nhiều rồi đấy!" : "Tiếp tục bấm đi..."}</p>
    </div>
  )
}

export default App