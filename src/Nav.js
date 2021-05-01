import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  console.log(show, "--", window.scrollY);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <img
        className={"nav__logo"}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        }
        alt={"logo"}
      />
      <img
        className={"nav__avatar"}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        }
        alt={"avatar"}
      />
    </div>
  );
}
export default Nav;
