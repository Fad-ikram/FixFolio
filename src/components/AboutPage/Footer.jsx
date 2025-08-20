import { Facebook, Instagram, Linkedin, Github, Twitter } from "lucide-react";
const FooterPage = () => {
  return (
    <footer className=" text-purple bg-white ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-12 ">
        <div>
          <h2 className="font-bold text-xl mb-2 text-dark-purple">Fixfolio</h2>
          <p className="text-dark-purple ">Craft your portfolio, your way</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-dark-purple text-xl">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline hover:text-dark-purple">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-dark-purple">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline hover:text-dark-purple">
                My Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-dark-purple text-xl">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/privacy" className="hover:underline hover:text-dark-purple">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline hover:text-dark-purple">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-dark-purple text-xl">Follow Us</h4>
          <div className="flex space-x-3">
            <a target="_blank" href="#" aria-label="Facebook" className="hover:text-dark-purple">
              <Facebook />
            </a>
            <a target="_blank" href="https://www.instagram.com/ikram_ben_yelles/" aria-label="Instagram" className="hover:text-dark-purple">
              <Instagram />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/benyelles-ikram-fadela-2ba988332/" aria-label="LinkedIn" className="hover:text-dark-purple">
              <Linkedin />
            </a>
            <a target="_blank" href="https://github.com/Fad-ikram"  aria-label="Github" className="hover:text-dark-purple">
              <Github />
            </a>
            <a target="_blank" href="#" aria-label="Twitter" className="hover:text-dark-purple">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-dark-purple mx-20 mt-2" />
      <div className="text-center text-dark-purple py-4">
        &copy; {new Date().getFullYear()} Fixfolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
