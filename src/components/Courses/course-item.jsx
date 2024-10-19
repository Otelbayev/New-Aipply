import React from "react";

const CourseItem = ({ data }) => {

  return (
    <div className="course">
      <div className="course__title title">{data.title}</div>
      <img src={data.img} className="course__icon" alt="" />
      <div className="course__desc">{data.desc}</div>
      <div className="course__month title">{data.month} oy + sertifikat</div>
      <button className="btn course__button btn">Batafsil</button>
    </div>
  );
};

export default CourseItem;
