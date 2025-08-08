import Button from "../../components/Global/Button";
import Input from "../../components/Global/Input";
import bot from "../../../public/bot.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
      const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    const { Email, Password } = user;
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    if (!Email || !Password) {
      setError("All fields are required");
      return;
    }
    if (!emailRegex.test(Email)) {
      setError("Invalid email format");
      setSuccess("");
      return;
    }
    if (Password.length < 8) {
      setError("Password must be at least 8 characters");
      setSuccess("");
      return;
    }

    setError("");
  };
  
      
  return (
    <div className="bg-beige h-screen flex flex-col items-center justify-center overflow-y-hidden"> 
      <div className="flex items-center justify-center gap-4 mb-6 mt-7">
        <img
          src={bot}
          alt="bot"
          className=" w-[80px] h-[80px] object-contain"
        />
        <p className="text-dark-purple font-bold border-[1.5px] border-dark-purple rounded-md w-full py-4 px-4 ">
            Login to your account to continue your progress :
        </p>
      </div>
      <div className="flex items-center justify-center bg-beige ">
        <div className="bg-purple text-beige flex flex-col items-center justify-center h-[469px]  gap-2 border-[1.5px] border-purple rounded-2xl px-10 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl text-beige font-bold press-start-2p-regular mb-4">
            Hello, Welcome{" "}
          </h2>
          <p className="">Don't have an account?</p>
          <Button
            className=" border-[1.7px] border-beige text-beige transition-all hover:border-dark-purple hover:text-dark-purple duration-700"
            text="Register"
            onClick={() => navigate("/sign-up")}
          />
        </div>
        <form
          className="mb-4 flex flex-col items-center justify-center bg-beige h-[482px]
        border-[1.5px] rounded-2xl p-10 shadow-xl shadow-[0_25px_50px_-7px_rgba(0,0,0,0.25)] border-beige gap-2"
        >
          <h2 className="text-xl text-dark-purple font-bold press-start-2p-regular mb-4">
            Login
          </h2>
           <div className="min-h-[1.5rem] mb-1">
            <p className="text-red-700 font-mono">{error || "\u00A0"}</p>
            {!error && success && (
              <p className="text-green-700 font-mono">{success}</p>
            )}
          </div>
          <Input label="Email" type="email" name="Email" placeholder="Enter your email" 
           onChange={(e) =>
             setUser({ ...user, Email: e.target.value })
              }
           value={user.Email}
          />
          <Input
            label="Password"
            name="Password"
            type="password"
            placeholder="Enter your password"
            value={user.Password}
            onChange={(e) =>
              setUser({ ...user, Password: e.target.value })
            }
          />

          <Button className="bg-dark-purple text-beige  " text="Login"
            onClick={(e) => {
              handleSignIn(e);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
