import React from "react";
import PrimaryPhoto1 from "../../../../../public/trending/PrimaryPhoto1.jpg";
import PrimaryPhoto2 from "../../../../../public/trending/PrimaryPhoto2.jpg";
import PrimaryPhoto3 from "../../../../../public/trending/PrimaryPhoto3.jpg";
import SecondaryPhoto1 from "../../../../../public/trending/SecondaryPhoto1.jpg";
import SecondaryPhoto2 from "../../../../../public/trending/SecondaryPhoto2.jpg";
import SecondaryPhoto3 from "../../../../../public/trending/SecondaryPhoto3.jpg";
import SecondaryPhoto4 from "../../../../../public/trending/SecondaryPhoto4.jpg";
import SecondaryPhoto5 from "../../../../../public/trending/SecondaryPhoto5.jpg";
import SecondaryPhoto6 from "../../../../../public/trending/SecondaryPhoto6.jpg";
import Avatar1 from "../../../../../public/trending/Avatar1.jpg";
import Avatar2 from "../../../../../public/trending/Avatar2.jpg";
import Avatar3 from "../../../../../public/trending/Avatar3.jpg";
import { Link } from "react-router-dom";

const trendingItems = [
  {
    primaryPhoto: PrimaryPhoto1,
    secondaryPhotos: [SecondaryPhoto1, SecondaryPhoto2],
    avatar: Avatar1,
    name: "DSGN Animals",
    artist: "MrFox",
    count: "1025+",
  },
  {
    primaryPhoto: PrimaryPhoto2,
    secondaryPhotos: [SecondaryPhoto3, SecondaryPhoto4],
    avatar: Avatar2,
    name: "Magic Mushrooms",
    artist: "Shroomie",
    count: "1025+",
  },
  {
    primaryPhoto: PrimaryPhoto3,
    secondaryPhotos: [SecondaryPhoto5, SecondaryPhoto6],
    avatar: Avatar3,
    name: "Disco Machines",
    artist: "BeKind2Robots",
    count: "1025+",
  },
];

export const Trending = () => {

  return (
    <section className="trending pd-section">
      <h3>Trending Collection</h3>
      <h4>Checkout our weekly updated trending collection.</h4>
      <div className="trending-container">
        {trendingItems.map((item, index) => (
          <div key={index} className="trending-group">
            <div className="trending-col">
              <img className="col col-1" src={item.primaryPhoto} alt={item.name} />
              {item.secondaryPhotos.map((photo, idx) => (
                <img key={idx} className={`col col-${idx + 2}`} src={photo} alt={item.name} />
              ))}
              <p className="col col-4">{item.count}</p>
            </div>
            <h5 className="trending-name">{item.name}</h5>
            <Link className="trending-character">
              <img src={item.avatar} alt={`${item.artist}'s Avatar`} /> {item.artist}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};