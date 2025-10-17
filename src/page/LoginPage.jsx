import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigater = useNavigate()
    
  return (
    <>
    <img src="https://i.pinimg.com/1200x/86/25/db/8625db4821c67988c2a4ec7141d9040d.jpg" className="mainImg" alt="" />
      <h1>어서오세용</h1>
      <button className="left-button" onClick={() => navigater('/')}>다시 180도 돌아 나가기</button>
      <button className="OR-button">OR</button>
    <button className="start-button" onClick={() => window.open("https://houl-yup-bean.github.io/Quiz/")}>시작하기</button>
      
    </>
  )
}

export default LoginPage