import React from "react";

function Intro() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };
  return (
    <div className="bg-gray-900 h-screen ">
      <div className="translate-y-[10rem]">
        <h1 className="text-5xl text-white py-20">
          Hi! Welcome to the beta build of the affordability model
        </h1>
        <p className="text-2xl text-white py-20">
          (This build uses the beta model, without the shared ownership pathway)
        </p>
        <div className="flex justify-end pr-20">
          <button
            onClick={() => scrollToSection("input")}
            style={{ cursor: "pointer" }}
            className="btn btn-lg bg-accent text-neutral"
          >
            Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
