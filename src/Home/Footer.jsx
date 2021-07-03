import React from "react";
import { footer } from "./data";
import logo from "../assets/logo.png";

function antCloudFooter() {
  const children = footer.map((item, i) => (
    <div key={i}>
      <a href={item.src}>{item.text}</a>
    </div>
  ));
  return (
    <div>
      <div className="logo" key="logo">
        <img src={logo} width="150" height="82" />
      </div>
      <div key="nav" className="home-footer-nav-wrapper">
        {children}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">
          Copyright ©2021 Zenus
        </p>
      </div>
    </div>
  );
}

export default Footer;
