import portofolio from "../../../public/portofolio.png";
import design from "../../../public/design.png";
import bot from "../../../public/bot.webp";
import terminal from "../../../public/terminal.svg";
import { useNavigate } from "react-router-dom";
import { Rainbow, SquareCode, Zap, Rocket } from "lucide-react";
import red from "../../../public/project-portfolio/red.jpg";
import game from "../../../public/project-portfolio/game.jpg";
import cooking from "../../../public/project-portfolio/cooking.jpg";
import swim from "../../../public/project-portfolio/swim.jpg";
import waves from "../../../public/project-portfolio/waves.jpg";
import tree from "../../../public/project-portfolio/tree.jpg";
import Template from "../../components/AboutPage/Template";
import ContactPage from "../../components/AboutPage/Contact";
import FooterPage from "../../components/AboutPage/Footer";
import Slider from "../../components/AboutPage/slider";

const About = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-cyan">
      <section class="py-12  text-center ">
        <aside
          data-aos="fade-up"
          className="flex justify-center items-center gap-8 "
        >
          <div className="flex flex-col items-center gap-16">
            <div className="flex items-center justify-center gap-4 mt-7">
              <img
                src={bot}
                alt="bot"
                className=" w-[80px] h-[80px] object-contain"
              />
              <p className="text-dark-purple  press-start-2p-regular border-[1.5px] border-dark-purple rounded-md py-4 px-4 ">
                What is it FixFolio ?
              </p>
            </div>
            <p class="text-xl text-start px-10 max-w-[500px]">
              Fixfolio is a modern, intuitive portfolio builder no coding
              required. Whether you're a designer, developer or creative
              professional Fixfolio allows you to craft a standout portfolio
              that truly reflects your personal style and vision.
            </p>
          </div>
          <img src={portofolio} className="w-[650px]" alt="Portfolio Example" />
        </aside>
      </section>

      <section class="py-12  text-center ">
        <aside className="flex justify-center items-center gap-8 ">
          <img src={design} className="w-[600px]" alt="Portfolio Example" />
          <div className="flex flex-col items-center gap-16">
            <div className="flex items-center justify-center gap-4 mt-7">
              <p className="text-dark-purple  press-start-2p-regular border-[1.5px] border-dark-purple rounded-md py-4 px-4 ">
                Why choose Fixfolio?
              </p>
              <img
                src={terminal}
                alt="terminal icon"
                className=" w-[80px] h-[80px] object-contain"
              />
            </div>
            <ul className="flex flex-col items-start font- gap-2 text-xl ">
              <li className="flex items-center space-x-2">
                <Rainbow size={24} color="#6F4C7A" />
                <span>Totally Customizable</span>
              </li>
              <li className="flex items-center space-x-2">
                <SquareCode size={24} color="#6F4C7A" />
                <span>Zero Coding Required</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap size={24} color="#6F4C7A" />
                <span>Fast and Seamless</span>
              </li>
              <li className="flex items-center space-x-2">
                <Rocket size={24} color="#6F4C7A" />
                <span>Start to Showcase with Ease</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <section class="px-6 py-12 flex flex-col items-center gap-6 bg-white ">
        <h2 class="text-3xl font-bold text-dark-purple mt-12">
          Your Vision Built in Fixfolio
        </h2>
        <p class="text-center text-xl mb-10">
          Showcasing Creations Crafted with Fixfolio
        </p>

        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-5xl">
          <Template
            Label={red}
            alt="Marta Veludo Portfolio"
            caption="Marta Veludo"
          />

          <Template Label={waves} alt="Tom Portfolio" caption="Tom Hegen" />

          <Template
            Label={swim}
            alt="Ludwig Favre Portfolio"
            caption="Ludwig Favre"
          />
          <Template
            Label={tree}
            alt="Marina Weishaupt Portfolio"
            caption="Marina Weishaupt"
          />
          <Template
            Label={game}
            alt="Thomas Moeller Portfolio"
            caption="Thomas Moeller"
          />
          <Template
            Label={cooking}
            alt="Lina Skukauske Portfolio"
            caption="Lina Skukauske"
          />
        </ul>
        <button
          onClick={() => navigate("/portfolio")}
          class="mt-6 cssbuttons-io-button"
        >
          Get started
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </section>
      <ContactPage />
      <Slider/>
      <FooterPage />
    </main>
  );
};

export default About;
