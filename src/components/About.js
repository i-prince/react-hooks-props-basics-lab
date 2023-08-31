import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio &&  <p>{props.bio}</p>} {/*conditional rendering*/}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links userGithub={props.links.github} userLinkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
