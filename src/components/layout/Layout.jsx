import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import Scroll from "react-scroll";
import useEventListener from "../../hooks/useEventListener";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, blurred }) => {
  const [backToTop, setBackToTop] = useState(false);

  const scroll = Scroll.animateScroll;

  const isVisible = () => {
    const scrollTop = window.scrollY;
    scrollTop > 500 ? setBackToTop(true) : setBackToTop(false);
  };

  useEventListener("scroll", isVisible);

  return (
    <div
      className={`wrapper relative min-h-screen w-full bg-grey ${
        blurred ? "blurredBg" : ""
      }`}
    >
      <Header />
      <main
        className={`page-content relative bg-grey bg-opacity-95 ${
          blurred ? "backdrop-blur-lg backdrop-filter" : ""
        }`}
      >
        <div className="sitedata relative z-30 min-h-screen">{children}</div>
      </main>
      <Footer />
      <motion.button
        initial={{
          opacity: 0,
          x: 1000,
        }}
        animate={{
          opacity: backToTop ? 1 : 0,
          x: backToTop ? 0 : 1000,
        }}
        className="btn fixed bottom-12 left-auto top-auto right-7 z-30 rounded-full p-2.5 text-xl"
        onClick={() => scroll.scrollToTop()}
      >
        <RiArrowUpSLine />
      </motion.button>
    </div>
  );
};

export default Layout;
