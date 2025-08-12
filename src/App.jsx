import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "./components/Global/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotFoundPage from "./pages/NotFound";
import { AuthProvider } from "./hooks/authContext";
import GuestMiddleware from "./middleware/guestMiddleWare";
import AuthMiddleware from "./middleware/authMiddleWare";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Guest API Middleware */}
          <Route element={<GuestMiddleware />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
          {/* Authenticated routes */}
          <Route element={<AuthMiddleware />}>
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
