import { useState } from "react";
import { ScrollButtonContainer, UpBtn } from "./scroll-button-style";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled < 200) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollButtonContainer
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
    <UpBtn />
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
