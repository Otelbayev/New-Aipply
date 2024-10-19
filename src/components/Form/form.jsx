import React from "react";
import { Container } from "./form.style";

const Form = () => {
  return (
    <Container>
      <div className="form">
        <div className="form__title title">Bepul birinchi darsga yoziling</div>
        <div className="form__desc title">
          Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va
          barcha savollaringizga javob beramiz!
        </div>
        <button className="form__button btn">Ro’yhatdan o’tish</button>
      </div>
    </Container>
  );
};

export default Form;
