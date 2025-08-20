import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Global/Input";
import Button from "../../components/Global/Button";
import bot from "../../../public/bot.webp";
import api from "../../lib/axiosApi";
import { useAuth } from "../../hooks/authContext"; 

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUserForm] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { Username, Email, Password, ConfirmPassword } = user;
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    if (!Username || !Email || !Password || !ConfirmPassword) {
      setError("All fields are required");
      return;
    }
    if (Username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }
    if (!emailRegex.test(Email)) {
      setError("Invalid email format");
      return;
    }
    if (Password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (Password !== ConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    try {
      setLoading(true);

      // Register
      await api.post(`/users/sign-up`, {
        name: Username,
        email: Email,
        password: Password,
      });

      // Auto-login
      const response = await api.post(`/users/sign-in`, {
        email: Email,
        password: Password,
      });

      const { token, user: loggedInUser } = response.data;

      localStorage.setItem("token", token);
      setUser(loggedInUser); 

      navigate("/portfolio"); 
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-beige h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4 mb-5 mt-10">
        <img src={bot} alt="bot" className="w-[80px] h-[80px] object-contain" />
        <h2 className="text-dark-purple font-bold border-[1.5px] border-dark-purple rounded-md w-full py-4 px-4">
          Create an account to save your progress :
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSignUp}
          className="mb-4 flex flex-col items-center justify-center bg-beige border-[1.5px] rounded-2xl px-12 py-4 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)] border-beige"
        >
          <h2 className="text-xl text-dark-purple font-bold press-start-2p-regular mb-2">
            Registration
          </h2>
          <div className="min-h-[1.5rem] mb-1">
            <p className="text-red-700 font-mono">{error || "\u00A0"}</p>
          </div>
          <Input
            label="Username"
            name="Username"
            type="text"
            placeholder="Enter your username"
            value={user.Username}
            onChange={(e) => setUserForm({ ...user, Username: e.target.value })}
          />
          <Input
            label="Email"
            name="Email"
            type="email"
            placeholder="Enter your email"
            value={user.Email}
            onChange={(e) => setUserForm({ ...user, Email: e.target.value })}
          />
          <Input
            label="Password"
            name="Password"
            type="password"
            placeholder="Enter your password"
            value={user.Password}
            onChange={(e) => setUserForm({ ...user, Password: e.target.value })}
          />
          <Input
            label="Confirm Password"
            name="ConfirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={user.ConfirmPassword}
            onChange={(e) =>
              setUserForm({ ...user, ConfirmPassword: e.target.value })
            }
          />
          <Button
            className="bg-dark-purple text-beige"
            text="Register"
            type="submit"
            isLoading={loading}
          />
        </form>

        <div className="bg-purple text-beige flex flex-col items-center justify-center h-[473px] gap-2 border-[1.5px] border-purple rounded-2xl px-12 mb-8 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl text-beige font-bold press-start-2p-regular mb-4">
            Welcome Back
          </h2>
          <p>Already have an account?</p>
          <Button
            className="border-[1.7px] border-beige text-beige transition-all hover:border-dark-purple hover:text-dark-purple duration-700"
            text="Login"
            onClick={() => navigate("/sign-in")}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

