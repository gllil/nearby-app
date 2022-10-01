import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/Auth";
import PrivateRoutes from "./auth/PrivateRoute";
import NavMenu from "./components/NavMenu";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <AuthProvider>
      <div style={{ WebkitTapHighlightColor: "transparent" }}>
        <Router>
          <NavMenu />
          <main>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/home" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/transactions" element={<Transactions />} />
              </Route>
            </Routes>
          </main>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
