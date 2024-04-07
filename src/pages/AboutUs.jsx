import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { getBios } from "../client/estilocalico.js";
import { CircularProgress } from "@mui/material";

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
        {bios.length === 0 ? (
          <CircularProgress size={100} />
        ) : (
          bios.map((bio) => <MemberCard key={bio["id"]} bioObj={bio} />)
        )}
      </div>
    </div>
  );
}

export default AboutUs;
