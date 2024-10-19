import React from "react";
import { Container } from "./courses.style";
import { courseData } from "../../mock/course";
import CourseItem from "./course-item";

const Courses = () => {
  return (
    <Container className="container">
      <div className="courses-title title">Mavjud kurslar</div>
      <div className="courses">
        {courseData.map((e, index) => (
          <CourseItem data={e} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Courses;
