import React from "react";
import { Container } from "./why.style";
import WhyItem from "./why-item";
import { whyData } from "../../mock/why";

const Why = () => {
  return (
    <Container className="container">
      <div className="why-title title">Nega aynan Aipply Academy?</div>
      <div className="why">
        {whyData.map(({ icon, title }, index) => (
          <WhyItem key={index} icon={icon} title={title} />
        ))}
      </div>
    </Container>
  );
};

export default Why;
