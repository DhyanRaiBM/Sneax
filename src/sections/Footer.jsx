import { footerLogo } from "../assets/images"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="max-container">
        <div className="flex gap-10 items-center justify-center max-md:flex-col max-md:items-start">
            <div className=" flex flex-col gap-3 w-[30%] max-md:w-[100%]">
                <figure>
                <img src={footerLogo} alt="Logo" />
                </figure>
                <p className="info-text">This Website was Developed using Tailwind CSS and React By Dhyan Rai</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1">
                <h2 className="font-palanquin text-2xl mb-3 font-bold text-wrap text-white">Get In Touch</h2>
                <p className="info-text">dhyanraibm@gmail.com</p>
                <p className="info-text">+91 97414594764</p>
                <div className="flex gap-2 mt-2">
                  <a href="https://github.com/DhyanRaiBM" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} style={{color:"white"}}/>
                  </a>
                  <a href="https://www.instagram.com/_dhyan_rai?igsh=MWloNXM2YXV6ZDZrag==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} style={{color:"white"}}/>
                  </a>
                  <a href="https://www.linkedin.com/in/dhyan-rai-bm" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} style={{color:"white"}} />
                  </a>
                </div>
              </div>
            </div>
        </div>
        <p className="info-text text-center mt-10">
        &copy; 2024 Dhyan Rai. All rights reserved.
        </p>
    </footer>
  )
}
export default Footer
