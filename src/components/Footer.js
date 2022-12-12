import React from "react";
import LogoWA from "./assets/Logo_WA.png";
import LogoGmail from "./assets/Logo_Gmail.png";
import LogoLI from "./assets/Logo_LI.png";


export default function Footer() {
  return (
    <div>
        <footer className="ftr">
            <h2 className="ftr-title">
                Website Application
            </h2>
            <div className="contact">
                <a href="https://www.whatsapp.com/?lang=id" target="_blank" rel="noreferrer"><img src={LogoWA} alt="logowa"></img></a>
                <a href="https://mail.google.com/mail/" target="_blank" rel="noreferrer"><img src={LogoGmail} alt="logoegmail"></img></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={LogoLI} alt="logoli"></img></a>
            </div>
            <p className="ftr-desc">Don't hesitate to contact us, we are happy to hear your opinion about our services and ask about our services or products</p>
            <h4>Created on 12 December 2022</h4>
        </footer>
    </div>
  )
}
