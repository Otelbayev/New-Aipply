import React from "react";
import { Container } from "./banner.style";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <Container className="container">
      <div className="banner">
        <p className="banner__text">
          Sun'iy intellekt - bu kelajak, zamonaviy kasblarda sun'iy intellektni
          samarali qo'llash esa - bu zamon talabi!
        </p>
        <img src={banner} alt="" className="banner__img" />
      </div>
    </Container>
  );
};

export default Banner;
