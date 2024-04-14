import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { CgBowl } from "react-icons/cg";
import ImageOne from "../../images/Disney.jpg";
import ImageTwo from "../../images/Grocery.jpg";
import ImageThree from "../../images/Admin.jpg";
import ImageFour from "../../images/Optimization.jpg";
import ImageFive from "../../images/Instagram.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Disney Clone",
    image: ImageOne,
    link: "https://hotstar-clone-app.netlify.app/",
  },
  {
    id: 3,
    name: "Grocery App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 4,
    name: "Dashboard",
    image: ImageThree,
    link: "",
  },
  {
    id: 5,
    name: "IDS",
    image: ImageFour,
    link: "",
  },
  {
    id: 6,
    name: "Instagram Clone",
    image: ImageFive,
    link: "",
  },
  {
    id: 7,
    name: "Digital Clock",
    image: ImageFive,
    link: "",
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
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

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
