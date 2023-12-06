import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  function handleSubmit() {
    sessionStorage.setItem("text", text);
    navigate("/auth-login");
  }

  return(
    <div>
      <h1>Login</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
