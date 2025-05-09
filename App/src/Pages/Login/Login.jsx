import { useState } from "react";
import { useAuth } from "../../Components/context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logIn, googleSignIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(email, password).then((res) => console.log(res));
      navigate("/");
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/operation-not-allowed":
          setError("Email/password authentication is not enabled");
          break;
        case "auth/user-not-found":
        case "auth/wrong-password":
          setError("Invalid email or password");
          break;
        case "auth/invalid-email":
          setError("Invalid email format");
          break;
        default:
          setError("Failed to log in");
      }
    }
    setLoading(false);
  }

  async function handleGoogleSignIn() {
    try {
      setError("");
      setLoading(true);
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/operation-not-allowed":
          setError("Google authentication is not enabled");
          break;
        default:
          setError("Failed to sign in with Google");
      }
    }
    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button disabled={loading} type="submit" className="auth-button">
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="auth-google-button"
        >
          Sign in with Google
        </button>
        <div className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
