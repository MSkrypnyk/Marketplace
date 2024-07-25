import React from "react";
import { Link } from "react-router-dom";
import { StartedIcon } from "../../../../shared/icons/StartedIcon";
import Space from "../../../../../public/welcome/Space.jpg";
import Avatar1 from "../../../../../public/welcome/Avatar1.jpg";

export const Welcome = () => {
  return (
    <section className="welcome pd-section">
      <div className="welcome__info">
        <h1 className="welcome__title">
          Discover <br /> digital art & <br /> Collect NFTs
        </h1>
        <p className="welcome__desc">
          NFT marketplace UI created with Anima for <br /> Figma. Collect, buy
          and sell art from more <br /> than 20k NFT artists.
        </p>
        <Link className="welcome__btn btn">
          <StartedIcon /> Get Started
        </Link>
        <div className="welcome__group">
          <div className="welcome__date">
            <p className="welcome__date-desc">240k+ </p>
            <p className="welcome__date-title">Total Sale</p>
          </div>
          <div className="welcome__date">
            <p className="welcome__date-desc">100k+</p>
            <p className="welcome__date-title">Auctions</p>
          </div>
          <div className="welcome__date">
            <p className="welcome__date-desc">Auctions</p>
            <p className="welcome__date-title">Artists</p>
          </div>
        </div>
      </div>
      <div className="welcome__img">
        <img className="welcome__img-space" src={Space} alt="Space Walking" />
        <p className="welcome__img-title">Space Walking</p>
        <Link className="welcome__img-character" to="/">
          {" "}
          <img src={Avatar1} alt="Animakid" />
          Animakid
        </Link>
      </div>
    </section>
  );
};
