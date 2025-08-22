import Button from "../../components/Global/Button";
import Input from "../../components/Global/Input";
import bot from "../../../public/bot.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";


const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      setSuccess("");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setSuccess("");
      return;
    }

    setError("");
    signInUser();
  };

  async function signInUser() {
    try {
      setLoading(true);
      await login({ email, password });
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
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 m-10 text-center">
    <img
      src={bot}
      alt="bot"
      className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain"
    />
    <p className="text-dark-purple font-bold border-[1.5px] border-dark-purple rounded-md py-3 px-4 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md">
      Login to your account to continue your progress :
    </p>
  </div>

  <section className="flex flex-col md:flex-row items-center justify-center max-w-5xl">
    <div className="bg-purple text-beige flex flex-col items-center justify-center h-auto md:h-[469px] gap-3 border-[1.5px] border-purple rounded-2xl px-6 sm:px-10 py-8 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)] w-full md:w-1/2">
      <h2 className="text-xl sm:text-2xl text-beige font-bold press-start-2p-regular mb-3 text-center">
        Hello, Welcome
      </h2>
      <p className="text-sm sm:text-base mb-2">Don't have an account?</p>
      <Button
        className="border-[1.7px] border-beige text-beige transition-all hover:border-dark-purple hover:text-dark-purple duration-700"
        text="Register"
        onClick={() => navigate("/sign-up")}
      />
    </div>

    <form
      className="flex flex-col items-center justify-center bg-beige h-auto md:h-[472px]
      border-[1.5px] rounded-2xl p-6 sm:p-10 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)] border-beige gap-3 w-full md:w-1/2"
    >
      <h2 className="text-lg sm:text-xl text-dark-purple font-bold press-start-2p-regular mb-3 text-center">
        Login
      </h2>

      {/* Messages */}
      <div className="min-h-[1.5rem] mb-1 text-center">
        <p className="text-red-700 font-mono text-sm">{error || "\u00A0"}</p>
        {!error && success && (
          <p className="text-green-700 font-mono text-sm">{success}</p>
        )}
      </div>

      {/* Inputs */}
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      {/* Submit */}
      <Button
        className="bg-dark-purple text-beige w-full"
        text="Login"
        onClick={(e) => {
          handleSignIn(e);
        }}
        isLoading={loading}
      />
    </form>
  </section>
</main>

  );
};

export default SignIn;
