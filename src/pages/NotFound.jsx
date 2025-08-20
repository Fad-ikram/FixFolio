import { useNavigate } from "react-router-dom";
import bot from "../../public/bot.webp";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
   <div className="bg-beige h-screen flex flex-col items-center justify-center overflow-y-hidden gap-12">
      <div className="flex items-center justify-center gap-4 mt-7">
        <img
          src={bot}
          alt="bot"
          className=" w-[80px] h-[80px] object-contain"
        />
        <p className="text-dark-purple border-[1.5px] border-dark-purple rounded-md py-4 px-4 ">
          Oops! The page you’re looking for doesn’t exist...
        </p>
      </div>
    <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-dark-purple text-4xl mb-6">Page Not Found</h2>
        <button
          className="px-4 py-2 bg-purple text-white rounded-full transition duration-700 hover:bg-dark-purple"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
      </div>
  );
};

export default NotFoundPage;
