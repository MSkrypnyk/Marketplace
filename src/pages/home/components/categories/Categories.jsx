import { Link } from "react-router-dom";
import Image1 from "../../../../../public/categories/Image1.jpg";
import Image2 from "../../../../../public/categories/Image2.jpg";
import Image3 from "../../../../../public/categories/Image3.jpg";
import Image4 from "../../../../../public/categories/Image4.jpg";
import Image5 from "../../../../../public/categories/Image5.jpg";
import Image6 from "../../../../../public/categories/Image6.jpg";
import Image7 from "../../../../../public/categories/Image7.jpg";
import Image8 from "../../../../../public/categories/Image8.jpg";
import { PaintIcon } from "../../../../shared/icons/PaintIcon";
import { SwatchesIcon } from "../../../../shared/icons/SwatchesIcon";
import { MusicIcon } from "../../../../shared/icons/MusicIcon";
import { CameraIcons } from "../../../../shared/icons/CameraIcons";
import { VideoIcon } from "../../../../shared/icons/VideoIcon";
import { MagicIcon } from "../../../../shared/icons/MagicIcon";
import { BasketballIcon } from "../../../../shared/icons/BasketballIcon";
import { PlanetIcon } from "../../../../shared/icons/PlanetIcon";

const images = [
  { src: Image1, title: "Art", icon: <PaintIcon /> },
  { src: Image2, title: "Collectibles", icon: <SwatchesIcon /> },
  { src: Image3, title: "Music", icon: <MusicIcon /> },
  { src: Image4, title: "Photography", icon: <CameraIcons /> },
  { src: Image5, title: "Video", icon: <VideoIcon /> },
  { src: Image6, title: "Utility", icon: <MagicIcon /> },
  { src: Image7, title: "Sport", icon: <BasketballIcon /> },
  { src: Image8, title: "Virtual Worlds", icon: <PlanetIcon /> },
];

export const Categories = () => {
  return (
    <section className="categories pd-section">
      <h3>Browse Categories</h3>
      <div className="categories-container">
        {images.map((image, index) => (
          <Link key={index} className="categories-col">
            <div className="categories-col__img-container">
              <div
                className="categories-col__img"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              {image.icon && (
                <div className="categories-col__icon">{image.icon}</div>
              )}
            </div>
            <h6 className="categories-col__title">{image.title}</h6>
          </Link>
        ))}
      </div>
    </section>
  );
};
