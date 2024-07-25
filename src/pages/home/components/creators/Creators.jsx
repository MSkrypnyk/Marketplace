import React from "react";
import { Link } from "react-router-dom";
import { RocketIcon } from "../../../../shared/icons/RocketIcon";
import Avatar1 from "../../../../../public/creators/Avatar1.jpg";
import Avatar2 from "../../../../../public/creators/Avatar2.jpg";
import Avatar3 from "../../../../../public/creators/Avatar3.jpg";
import Avatar4 from "../../../../../public/creators/Avatar4.jpg";
import Avatar5 from "../../../../../public/creators/Avatar5.jpg";
import Avatar6 from "../../../../../public/creators/Avatar6.jpg";
import Avatar7 from "../../../../../public/creators/Avatar7.jpg";
import Avatar8 from "../../../../../public/creators/Avatar8.jpg";
import Avatar9 from "../../../../../public/creators/Avatar9.jpg";
import Avatar10 from "../../../../../public/creators/Avatar10.jpg";
import Avatar11 from "../../../../../public/creators/Avatar11.jpg";
import Avatar12 from "../../../../../public/creators/Avatar12.jpg";


const creatorsData = [
  { id: 1, avatar: Avatar1, name: "Keepitreal", totalSales: "34.53 ETH" },
  { id: 2, avatar: Avatar2, name: "DigiLab", totalSales: "34.53 ETH" },
  { id: 3, avatar: Avatar3, name: "GravityOne", totalSales: "34.53 ETH" },
  { id: 4, avatar: Avatar4, name: "Juanie", totalSales: "34.53 ETH" },
  { id: 5, avatar: Avatar5, name: "BlueWhale", totalSales: "34.53 ETH" },
  { id: 6, avatar: Avatar6, name: "mr fox", totalSales: "34.53 ETH" },
  { id: 7, avatar: Avatar7, name: "Shroomie", totalSales: "34.53 ETH" },
  { id: 8, avatar: Avatar8, name: "robotica", totalSales: "34.53 ETH" },
  { id: 9, avatar: Avatar9, name: "RustyRobot", totalSales: "34.53 ETH" },
  { id: 10, avatar: Avatar10, name: "animakid", totalSales: "34.53 ETH" },
  { id: 11, avatar: Avatar11, name: "Dotgu", totalSales: "34.53 ETH" },
  { id: 12, avatar: Avatar12, name: "Ghiblier", totalSales: "34.53 ETH" },
];

export const Creators = () => {
  return (
    <section className="creators pd-section">
      <div className="creators-info">
        <div className="creators-group">
          <h3>Top creators</h3>
          <h4>Checkout Top Rated Creators on the NFT Marketplace</h4>
        </div>
        <Link className="creators-btn btn">
          <RocketIcon /> View Rankings
        </Link>
      </div>
      <div className="creators-container">
        {creatorsData.map((creator) => (
          <Link key={creator.id} className="creators-col">
            <div className="creators-col__number">{creator.id}</div>
            <img className="creators-col__img" src={creator.avatar} alt={`${creator.name}'s Avatar`} />
            <h6 className="creators-col__title">{creator.name}</h6>
            <p className="creators-col__desc">
              Total Sales: <span>{creator.totalSales}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
