import React from "react";
import { useMenuContext } from "../context/menu-context";
import Header from "../components/Header/Header";
import Showcase from "../components/Showcase/showcase";
import Why from "../components/Why/why";
import Courses from "../components/Courses/courses";
import Banner from "../components/Banner/bannder";
import Partners from "../components/Partners/partners";
import Mentors from "../components/Mentors/mentors";
import Comments from "../components/Comments/comments";
import Bottom from "../components/Bottom/bottom";
import Footer from "../components/Footer/footer";

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
