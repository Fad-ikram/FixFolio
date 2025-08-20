import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";
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

function AppLayout() {
  const location = useLocation();

  // All defined routes
  const definedRoutes = ["/", "/about", "/sign-up", "/sign-in", "/portfolio"];

  // Check if current path matches any defined route
  const isKnownRoute = definedRoutes.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );

  return (
    <>
      {isKnownRoute && <NavBar />}
      <Routes>
        {/* Guest routes */}
        <Route element={<GuestMiddleware />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>

        {/* Authenticated routes */}
        <Route element={<AuthMiddleware />}>
          
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AuthProvider>
  );
}


