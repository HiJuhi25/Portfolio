import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { CgBowl } from "react-icons/cg";
import ImageOne from "../../images/Disney.jpg";
import ImageTwo from "../../images/Grocery.jpg";
import ImageThree from "../../images/Admin.jpg";
import ImageFour from "../../images/Optimization.jpg";
import ImageFive from "../../images/Instagram.jpg";
import ImageSix from "../../images/DigitalClock.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Disney Clone",
    image: ImageOne,
    link: "https://hotstar-clone-app.netlify.app/",
  },
  {
    id: 2,
    name: "Grocery App",
    image: ImageTwo,
    link: "https://grocery-app-dun.vercel.app/",
  },
  {
    id: 3,
    name: "Dashboard",
    image: ImageThree,
    link: "https://admin-panel-three-gold.vercel.app/",
  },
  {
    id: 6,
    name: "IDS",
    image: ImageFour,
    link: "",
  },
  {
    id: 5,
    name: "Instagram Clone",
    image: ImageFive,
    link: "",
  },
  {
    id: 4,
    name: "Digital Clock",
    image: ImageSix,
    link: "https://digital-clock.static.domains/project1",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Completed",
  },
  {
    filterId: 3,
    label: "Ongoing",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(2); // Initially show "Completed" items
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData // Show all items for "All" filter
      : filteredValue === 2
      ? portfolioData.filter((item) => ![5, 6].includes(item.id)) // Show "Completed" items
      : portfolioData.filter((item) => [5, 6].includes(item.id)); // Show "Ongoing" items

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent headerText="My Projects" icon={<CgBowl size={35} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              key={`cardItem${item.name.trim()}`}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
