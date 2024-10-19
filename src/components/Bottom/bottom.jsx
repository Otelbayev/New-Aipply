import React from "react";
import { Container } from "./bottom.style";
import boy from "../../assets/images/boy.png";

const Bottom = () => {
  return (
    <Container className="container">
      <div className="bottom">
        <div className="bottom__left">
          <div className="bottom__left--title title">
            Aipply Academy bilan zamonaviy kasblarni zamon talabida o’rganing
          </div> 
          <div className="bottom__left--form">
            <div>Bepul ochiq darsga </div>
            <div>yozilish!</div>
            <button className="btn">Bepul birinchi darsga yoziling</button>
          </div>
        </div>
        <img src={boy} alt="" className="bottom__right" />
      </div>
    </Container>
  );
};

export default Bottom;
