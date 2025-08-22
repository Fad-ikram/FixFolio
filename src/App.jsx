import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/Global/NavBar";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotFoundPage from "./pages/NotFound";
import { AuthProvider } from "./hooks/authContext";
import GuestMiddleware from "./middleware/guestMiddleWare";
import AuthMiddleware from "./middleware/authMiddleWare";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          {/* Guest routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          {/* Authenticated routes */}
          <Route element={<AuthMiddleware />}>
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
