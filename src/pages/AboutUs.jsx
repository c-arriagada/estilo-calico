import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { getBios } from "../client/estilocalico.js";

const MemberCard = ({ bioObj }) => {
  return (
    <article className="member-bio" id={`bio-${bioObj.first_name}`}>
      <img
        loading="lazy"
        src={bioObj.bio_img}
        alt="Amon"
        className="member-photo"
      />
      <div className="bio">
        <h2 className="bio-name">
          {bioObj.first_name + " " + bioObj.last_name}{" "}
        </h2>
        <p className="bio-text">{bioObj.bio}</p>
      </div>
    </article>
  );
};

function AboutUs() {
  const [bios, setBios] = useState([]);

  useEffect(() => {
    getBios().then(setBios);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="aboutUs">
        <h1>About Us</h1>
        {bios.map((bio) => (
          <MemberCard key={bio["id"]} bioObj={bio} />
        ))}
        {/*  <article className="member-bio" id="bio-Ryan">
          <img loading="lazy" src={Ryan} alt="Ryan" className="member-photo" />
          <div className="bio">
            <h2 className="bio-name">Ryan Norris</h2>
            <p className="bio-text">
              Ryan started playing guitar at 13 years old and playing with bands
              in clubs by age 15. When he was 20 years old, Ryan relocated to
              Murfreesboro, TN to pursue a music industry degree at MTSU and
              moved the short distance to Nashville soon after. Over 15 years in
              Music City, he became known as a keyboard player,
              multi-instrumentalist, and electronic musician. Ryan was a staple
              on stages and in studios, and toured the world, performing in over
              25 countries on four continents. He has scored films, collaborated
              with visual artists, made music for podcasts, and worked with
              creatives on the bleeding edge of machine learning.
            </p>
          </div>
        </article> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default AboutUs;
