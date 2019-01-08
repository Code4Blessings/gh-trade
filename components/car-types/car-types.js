import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";

export default () => {
  return (
    <section className="car-types">
      <h1>Select car type</h1>
      <div className="car-types__frame">{insertCarType(cartTypesData)}</div>
    </section>
  );
};

function insertCarType(carTypeData) {
  const jsx = cartTypesData.map(car => {
    return (
      <Link href={car.link}>
        <a>
          <img src={car.img} />
          <h5>{car.type}</h5>
        </a>
      </Link>
    );
  });
  return jsx;
}

var cartTypesData = [
  {
    img: "/static/images/car-types/hatch.jpg",
    link: "#",
    type: "Hatch"
  },
  {
    img: "/static/images/car-types/convertible.jpg",
    link: "#",
    type: "Convertible"
  },
  {
    img: "/static/images/car-types/coupe.jpg",
    link: "#",
    type: "Coupe"
  },
  {
    img: "/static/images/car-types/people-mover.jpg",
    link: "#",
    type: "MPV"
  },
  {
    img: "/static/images/car-types/sedan.jpg",
    link: "#",
    type: "Sedan"
  },
  {
    img: "/static/images/car-types/suv.jpg",
    link: "#",
    type: "SUV"
  },
  {
    img: "/static/images/car-types/ute.jpg",
    link: "#",
    type: "Pickup"
  },
  {
    img: "/static/images/car-types/wagon.jpg",
    link: "#",
    type: "Estate"
  }
];
