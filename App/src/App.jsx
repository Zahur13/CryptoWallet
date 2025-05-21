import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { AuthContextProvider } from "./Components/context/AuthContext.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Analytics from "./Pages/Analytics/Analytics.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Wallet from "./Pages/Wallet/Wallet.jsx";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </AuthContextProvider>
      </Router>
      <Footer title="CryptoShpere" />
    </>
  );
}

export default App;
