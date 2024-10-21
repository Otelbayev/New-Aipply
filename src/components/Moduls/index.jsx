import React, { useState } from "react";
import { Container, Icons, Item } from "./style";

const Moduls = ({ data }) => {
  const [active, setActive] = useState(null);
  return (
    <div className="container">
      <Container>
        <div className="title-dark modul-title" data-aos="fade-right">
          Kurs modullari
        </div>
        <div className="module-body">
          {data?.length &&
            data.map((item) => (
              <Item key={item.id} id={item.id} name={active}>
                <div
                  className="item-top"
                  onClick={() =>
                    active === item.id ? setActive(null) : setActive(item.id)
                  }
                >
                  <div>
                    <div className="item-top__count">{item.id}</div>
                    <div className="item-top__name">{item.title}</div>
                  </div>
                  <Icons.Bottom id={item.id} name={active} />
                </div>
                <div className="item-body">
                  {item?.body?.map((e) => (
                    <h1 className="item-body__title" key={e.id}>
                      {e.title}
                    </h1>
                  ))}
                </div>
              </Item>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Moduls;
