import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Global/Input";
import Button from "../../components/Global/Button";
import bot from "../../../public/bot.webp";
import api from "../../lib/axiosApi";

const SignUp = () => {
  const navigate = useNavigate();
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
    createUser();
  };

  async function createUser() {
    try {
      setLoading(true);

      await api.post(`/users/sign-up`, {
        name: user.Username,
        email: user.Email,
        password: user.Password,
      });

      const response = await api.post(`/users/sign-in`, {
        email: user.Email,
        password: user.Password,
      });

      console.log("Token:", response.data.token);

      localStorage.setItem("token", response.data.token);
      navigate("/portfolio");
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  

  return (
   <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 mt-10 text-center">
    <img
      src={bot}
      alt="bot"
      className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain"
    />
    <p className="text-dark-purple font-semibold border-[1.5px] border-dark-purple rounded-md py-3 px-4 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md">
      Create an account to save your progress :
    </p>
  </div>

  <section className="flex flex-col md:flex-row items-center justify-center ">
    <form
      onSubmit={handleSignUp}
      className="flex flex-col items-center justify-center bg-beige border-[1.5px] rounded-2xl p-6 sm:p-10 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)] border-beige gap-1 w-full md:w-1/2"
    >
      <h2 className="text-lg sm:text-xl text-dark-purple font-bold press-start-2p-regular mb-2 text-center">
        Registration
      </h2>

      <div className="min-h-[1.5rem] mb-1 text-center">
        <p className="text-red-700 font-mono text-sm">{error || "\u00A0"}</p>
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
        className="bg-dark-purple text-beige w-full"
        text="Register"
        type="submit"
        isLoading={loading}
      />
    </form>

    <div className="bg-purple text-beige flex flex-col items-center justify-center h-auto md:h-[529px] gap-3 border-[1.5px] border-purple rounded-2xl px-6 sm:px-12 py-8 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)] w-full md:w-1/2">
      <h2 className="text-xl sm:text-2xl text-beige font-bold press-start-2p-regular mb-3 text-center">
        Welcome Back
      </h2>
      <p className="text-sm sm:text-base mb-2">Already have an account?</p>
      <Button
        className="border-[1.7px] border-beige text-beige transition-all hover:border-dark-purple hover:text-dark-purple duration-700"
        text="Login"
        onClick={() => navigate("/sign-in")}
      />
    </div>
  </section>
</main>

  );
};

export default SignUp;
