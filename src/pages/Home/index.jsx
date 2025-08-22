import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.41/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-black h-screen ">
      <section class=" relative ">
        <spline-viewer
          id="splineViewer"
          url="https://prod.spline.design/0UP9PX00ae3XcnQJ/scene.splinecode"
         ></spline-viewer>
       <h1
  className="
    text-3xl sm:text-4xl md:text-5xl  
    text-purple font-bold 
    absolute top-[35%] sm:top-[30%] md:top-[250px] 
    left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center px-2
  "
>
  FixFolio
</h1>

<p
  className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
    text-beige font-bold 
    absolute top-[45%] sm:top-[45%] md:top-[50%] 
    left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    w-11/12 sm:w-4/5 lg:w-2/3 
    text-center px-4
  "
>
  A PortFolio Built by You for You
</p>

        <button onClick={() => navigate("/about")} class="absolute bottom-[180px] left-1/2 transform -translate-x-1/2 cssbuttons-io-button">
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

    </main>
  );
}
export default Home;
