import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import bot from "../../../public/bot.webp";
import rocket from "../../../public/roccet.gif";
import dollar from "../../../public/portfolio-icons/video-game.png";
import mushroom from "../../../public/portfolio-icons/mushroom.png";
import portfo from "../../../public/portfolio-icons/portfo.png";
import idea from "../../../public/portfolio-icons/idea.png";
import projet from "../../../public/portfolio-icons/projet.png";
import skills from "../../../public/portfolio-icons/skills.png";
import chat from "../../../public/portfolio-icons/chat.png";

const PortfolioPreview = ({ data, onEdit }) => {
  const galleryRef = useRef(null);
  const portfolioRef = useRef(null); 

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

 const downloadPDF = async () => {
  const element = portfolioRef.current;

  // Render the element into a high-resolution canvas
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pdfHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save(`${data.firstName || "portfolio"}_portfolio.pdf`);
};


  if (!data || !data.uploads) {
    return (
      <main className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
        <p className="text-lg text-red-500">No data available.</p>
      </main>
    );
  }

  return (
    <main ref={portfolioRef}>
      <div className="flex items-center justify-center gap-4 mt-14 mb-4">
        <img
          src={bot}
          alt="bot"
          className=" w-[80px] h-[80px] object-contain"
        />
        <p className="text-dark-purple press-start-2p-regular border-[1.5px] border-dark-purple rounded-md py-4 px-4 ">
          Welcome to {data.firstName}'s Portfolio
        </p>
      </div>

      <section className="bg-cyan p-6 rounded-lg shadow-2xl">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row justify-around items-center gap-8 pt-[100px] pb-[100px]">
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-2xl font-semibold">Hello, I'm</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-purple mb-4">
              {data.lastName} {data.firstName}
            </h2>
            <p className="font-bold text-xl sm:text-3xl text-purple">
              {data.role}
            </p>
          </div>

          {data.uploads?.profilePic ? (
            <img
              src={
                data.uploads.profilePic instanceof File
                  ? URL.createObjectURL(data.uploads.profilePic)
                  : data.uploads.profilePic
              }
              alt="Profile"
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-[380px] md:h-[380px] object-cover rounded-full border-4 border-dark-purple shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 sm:w-52 sm:h-52 md:w-[300px] md:h-[300px] flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 bg-white">
              No Picture
            </div>
          )}
        </section>

        {/* About Me Section */}
        <section className="mt-12 bg-white p-12 rounded-lg shadow-lg mb-[120px]">
          <div className="flex  justify-center items-center gap-2 ">
            <img src={mushroom} alt="icon" className="w-10 h-10 " />
            <h3 className="text-2xl font-bold text-dark-purple  text-center">
              About Me
            </h3>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto mt-6 mb-12">
            Based in{" "}
            <span className="font-semibold text-dark-purple">
              {data.city}, {data.country}
            </span>
            , with an academic background from{" "}
            <span className="font-semibold text-dark-purple">
              {data.studies}
            </span>{" "}
            and solid expertise in{" "}
            <span className="font-semibold text-dark-purple">
              {data.skills}
            </span>
            .
            <br />
            <br />
            Passionate about{" "}
            <span className="font-semibold text-dark-purple">{data.bio}</span>,
            always seeking opportunities to innovate and collaborate on
            meaningful projects.
            <br />
            <br />
            Future goals include{" "}
            <span className="font-semibold text-dark-purple">
              {data.description}
            </span>
            , with a strong focus on growth and continuous improvement.
          </p>
          <div className="flex justify-center items-center">
            <img src={dollar} alt="icon" className="w-10 h-10" />
            <h5 className="text-md text-center font-semibold text-dark-purple">
              Tools & Technologies:
            </h5>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {data.tools.split(",").map((tool, index) => (
              <span
                key={index}
                className="py-2 bg-purple text-cyan text-center w-20 rounded-full text-sm font-medium shadow-sm transition duration-700 hover:bg-dark-purple hover:cursor-pointer"
              >
                {tool.trim()}
              </span>
            ))}
          </div>
        </section>

        {/* Gallery Section with Slider */}
        <section className="mb-[120px] z-10">
          {data.uploads.gallery?.length > 0 && (
            <div className="mt-[160px] relative">
              <div className="flex justify-center items-center gap-2">
                <img src={projet} alt="Icon" className="w-8 h-8" />
                <h3 className="text-dark-purple text-2xl text-center">
                  My work
                </h3>
              </div>

              <button
                onClick={() => scrollGallery("left")}
                className=" absolute left-0 top-1/2 -translate-y-1/2 bg-dark-purple text-beige p-2 rounded-full shadow-md transition duration-700 hover:bg-purple z-10"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                ref={galleryRef}
                className="flex gap-12 mt-10 overflow-x-hidden snap-x snap-mandatory scrollbar-hide scroll-smooth"
              >
                {data.uploads.gallery.map((file, index) => {
                  const imgURL =
                    file instanceof File ? URL.createObjectURL(file) : file;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 w-100 h-[240px] snap-center rounded-lg border shadow-sm hover:cursor-pointer"
                    >
                      <img
                        src={imgURL}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => scrollGallery("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-dark-purple text-beige p-2 rounded-full shadow-md transition duration-700 hover:bg-purple z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </section>

        {/* Projects,CV Section */}
        <div className="flex justify-center items-center gap-4 ">
          <img src={skills} alt="icon" className="w-10 h-10" />
          <h3 className="text-2xl font-bold text-dark-purple border-b text-center">
            Documents & Resources
          </h3>
        </div>
        <section className=" flex justify-evenly mt-8 pb-20">
          {data.uploads.projects?.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center">
                <img src={idea} alt=" Icon" className="w-8 h-8 mr-2" />
                <h4 className="text-lg font-semibold text-gray-700">
                  Project Files
                </h4>
              </div>
              <ul className="list-disc list-inside mt-2 text-blue-600">
                {data.uploads.projects.map((file, index) => {
                  const fileURL =
                    file instanceof File ? URL.createObjectURL(file) : file;
                  const fileName = file.name || `Project_${index + 1}`;

                  return (
                    <li key={index}>
                      <a
                        href={fileURL}
                        download={fileName}
                        className="hover:underline hover:text-blue-800"
                      >
                        📦 Download {fileName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {data.uploads.cv?.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center">
                <img src={portfo} alt="Icon" className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold text-gray-700">CV</h4>
              </div>
              <ul className="list-disc list-inside mt-2 text-blue-600">
                {data.uploads.cv.map((file, index) => {
                  const fileURL =
                    file instanceof File ? URL.createObjectURL(file) : file;
                  const fileName = file.name || `CV_${index + 1}`;

                  return (
                    <li key={index}>
                      <a
                        href={fileURL}
                        download={fileName}
                        className="hover:underline hover:text-blue-800"
                      >
                        📄 Download {fileName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center items-center gap-2">
            <img src={chat} alt="Icon" className="w-8 h-8" />
            <h3 className="text-2xl font-bold text-dark-purple text-center ">
              Get in Touch
            </h3>
          </div>

          <p className="text-center text-gray-600 mb-6 mt-6">
            Interested in working together or have a question? Feel free to
            reach out
            <br />— I’m always open to new opportunities and collaborations.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={`mailto:${data.email}`}
              className="px-6 py-3 bg-dark-purple text-white rounded-lg shadow-md hover:bg-purple transition"
            >
              📩 Email Me
            </a>

            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md transition duration-600 hover:bg-black "
              >
                🔗 View My GitHub
              </a>
            )}

            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md transition duration-600 hover:bg-blue-700 "
              >
                💼 Connect on LinkedIn
              </a>
            )}
          </div>
        </section>

        {/* Future plans */}
        <section className="text-center py-16 mt-16 ">
          <h2 className="text-3xl font-bold text-dark-purple mb-6">
            What’s Next?
          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-8">
            My journey is just beginning, and I’m always excited to take on new
            challenges. Whether it’s collaborating on an innovative project,
            exploring cutting-edge technologies, or building creative digital
            experiences
            <br /> — the next chapter starts here.
          </p>
          <div className="flex justify-center items-center gap-4">
            <img src={rocket} alt="Rocket Icon" className="w-18 h-16 " />

            <p className="text-2xl font-semibold text-purple">
              Let’s shape the future together.
            </p>
          </div>
        </section>

        {/* Thank You message */}
        <section className="bg-cyan text-dark-purple py-20 text-center rounded-t-[40px]">
          <h2 className="text-4xl font-extrabold mb-6 animate-bounce">
            Thank You!
          </h2>
          <p className="text-lg">You’ve reached the end of my portfolio ✨</p>
          <p className="mt-4 font-handwriting text-3xl">
            – {data.firstName} {data.lastName}
          </p>
        </section>
        <div className="flex justify-center gap-4 mt-6 mb-10">

          {/* Download Button */}
          <button
            onClick={downloadPDF}
            className="px-6 py-3 bg-dark-purple text-white font-semibold rounded-lg shadow-md hover:bg-purple transition"
          >
            💾 Save & Download as PDF
          </button>
           <button
          onClick={onEdit}
          className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          ✏️ Edit Portfolio
        </button>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPreview;
    