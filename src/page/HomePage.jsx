import { Link, Navigate, useNavigate } from "react-router-dom"
import './Home.css'

function HomePage() {
    const navigater = useNavigate()

  return (
    <>
    <img src="https://i.pinimg.com/736x/dd/14/39/dd1439dc12ad79eacd058faf342210fa.jpg" alt="" />
      <h2>"그대는 그비돌을 얼마나 아는가" 가 이름인 미궁</h2>
      <button onClick={() => navigater('/login')}>들어가기</button>
    
    </>
  )
}

export default HomePage