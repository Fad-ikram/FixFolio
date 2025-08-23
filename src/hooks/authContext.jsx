import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { signIn, getCurrentUser } from "../api/userCallApi";
import api from "../lib/axiosApi";                

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
          const response = await getCurrentUser(token);
          setUser(response.data?.user || response.user || null);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async ({ email, password }) => {
    const result = await signIn({ email, password });
    localStorage.setItem("token", result.token);

    api.defaults.headers.common["Authorization"] = `Bearer ${result.token}`;

    setUser(result.user);
    navigate("/portfolio"); 
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);
    navigate("/sign-in"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading ? (
        children
      ) : (
       <div class="loader"></div>
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

