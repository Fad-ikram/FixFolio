import jss from "../../../public/svg-icons/js.svg";
import httml from "../../../public/svg-icons/html-5.svg";
import csss from "../../../public/svg-icons/css3.svg";
import giit from "../../../public/svg-icons/git.svg";
import giithub from "../../../public/svg-icons/github.svg";
import myssql from "../../../public/svg-icons/mysql.svg";
import posttgres from "../../../public/svg-icons/postgresql.svg";
import reaact from "../../../public/svg-icons/react.svg";
import taillwind from "../../../public/svg-icons/tailwind.svg";




const Slider = () => {
// Array of icon imports for easier mapping
const icons = [
    jss,
    httml,
    csss,
    giit,
    giithub,
    myssql,
    reaact,
    taillwind,
    posttgres,
];

return (
    <main className="overflow-hidden whitespace-nowrap py-40 bg-white">
        <div className="flex animate-scroll-loop ">
            {[...icons, ...icons, ...icons].map((icon, idx) => (
                <img
                    key={idx}
                    src={icon}
                    className="h-20 w-40 mx-12 "
                    alt="tech-icon"
                    draggable={false}
                />
            ))}
        </div>
    </main>
);
};

export default Slider;




