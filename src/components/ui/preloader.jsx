import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const removePreloader = () => {
      setTimeout(() => {
        document.querySelector(".preloader").style.opacity = "0";
        setTimeout(() => {
          document.querySelector(".preloader").style.display = "none";
          document.querySelector(".preloader").remove();
          document.body.classList.remove("preloader-active");
        }, 500);
      }, 1500);
    };

    document.body.classList.add("preloader-active");
    window.addEventListener("load", removePreloader);

    return () => {
      window.removeEventListener("load", removePreloader);
    };
  }, []);

  return (
    <div className="preloader">
      <h1 className="preloader-text">Tabish's Portfolio</h1>
    </div>
  );
};

export default Preloader;
