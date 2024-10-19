import React from "react";
import { useMenuContext } from "../context/menu-context";
import Header from "../components/Header/Header.jsx";
import Showcase from "../components/Showcase/showcase.jsx";
import Why from "../components/Why/why.jsx";
import Courses from "../components/Courses/courses.jsx";
import Banner from "../components/Banner/bannder.jsx";
import Partners from "../components/Partners/partners.jsx";
import Mentors from "../components/Mentors/mentors.jsx";
import Comments from "../components/Comments/comments.jsx";
import Bottom from "../components/Bottom/bottom.jsx";
import Footer from "../components/Footer/footer.jsx";

const Home = () => {
  const { showMenu } = useMenuContext();
  return (
    <>
      <Header />
      <Showcase />
      {!showMenu && <Why />}
      {!showMenu && <Courses />}
      {!showMenu && <Banner />}
      {!showMenu && <Partners />}
      {!showMenu && <Mentors />}
      {!showMenu && <Comments />}
      {!showMenu && <Bottom />}
      {!showMenu && <Footer />}
    </>
  );
};

export default Home;
