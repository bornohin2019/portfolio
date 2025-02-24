import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../theme/ThemeContext.jsx'; // Adjusted import path
import { Fade } from "react-awesome-reveal";


const Contact = (props) => {
    const { header } = props
    const { theme } = useTheme();

    return (
        <div id="/contact">
            <Header title={header} />

            <div className="contact-container">
             <Fade direction="left" duration={2000} cascade damping={1e3} triggerOnce >
                <form className="contact-form" action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" required />
                    <select name="enquiry" id="enquiry">
                        <option>Freelance Project Proposal</option>
                        <option>General enquiry</option>
                        <option>Feedback</option>
                        <option>Hire Me</option>
                    </select>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                    ></textarea>
                    <button
                        style={{
                            cursor: "pointer",
                            backgroundColor: "black", color: "white",
                            padding: "10px 20px",
                            fontWeight: "bold",
                            margin: "0px",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "small",
                            justifyItems: "center"
                        }} type="submit">Send  Message</button>
                </form>
                </Fade>
                <div className="contactText">
                 <Fade direction="right" duration={2000} cascade damping={1e3} triggerOnce>
                    <div>
                        <p className="contact-text">
                        If you have any questions, suggestions, or would like to learn more about our services, feel free to reach out using the mail ( rabbani.pwad@gmail.com). Please enter your name, email, and message, and we will get back to you as soon as possible.
                        </p>
                    </div>
                 </Fade>
                    <div className="contact-links">
                     <Fade direction="up" duration={3000} cascade damping={1e3}>
                        <a
                            className="contact-link"
                            href="https://github.com/bornohin2019"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub}
                                style={{ color: theme.socialIconBgColor }} />
                        </a>
                     </Fade>
                     <Fade direction="up" duration={3000} delay={500} cascade damping={1e3}>
                        <a
                            className="contact-link"
                            href="https://www.linkedin.com/in/md-rabbani-mia/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin}
                                style={{ color: theme.socialIconBgColor }} />
                        </a>
                     </Fade>
                     <Fade direction="up" duration={3000} delay={1000}cascade damping={1e3}>
                        <a
                            className="contact-link"
                            href="mailto:rabbani.pwad@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope}
                                style={{ color: theme.socialIconBgColor }} />
                        </a>
                     </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;