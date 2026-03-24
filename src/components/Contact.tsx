import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box magical-box" style={{ padding: "30px" }}>
            <h4>Email</h4>
            <p>
              <a href="mailto:mrstudio835@gmail.com" data-cursor="disable">
                mrstudio835@gmail.com
              </a>
            </p>
            <h4>Phone & Address</h4>
            <p>+91 87870 00288</p>
            <p>599BM/009/054, Zahid Nagar Bhaptamau, Alam Nagar, Lucknow, UP – 226017, India</p>
            
            <h4 style={{ marginTop: "1rem" }}>Education</h4>
            <p>B.Com (English) - University of Lucknow (2021)</p>
            <p>Intermediate - K.V.R.D.S.O Lucknow (2018)</p>
          </div>
          <div className="contact-box magical-box" style={{ padding: "30px" }}>
            <h4>Work & Social</h4>
            <a
              href="https://play.google.com/store/apps/dev?id=9167592278410174030"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Play Store <MdArrowOutward />
            </a>
            <a
              href="https://rahbar.itch.io/rahbar-portfolio"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Itch.io <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rahbar-zafar-1a4516253/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/rahber.gamedev?igsh=MTdtb3c3Yno5YzhqcQ%3D%3D"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://github.com/RahbarZafar"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box magical-box" style={{ padding: "30px" }}>
            <h2>
              Designed and Developed <br /> by <span>Rahbar Zafar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
