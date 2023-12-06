function AuthLogin() {
  const text = sessionStorage.getItem("text") || "";

  return(
    <div>
      <h1>Auth login</h1>
      <p>{text}</p>
    </div>
  );
}

export default AuthLogin;
