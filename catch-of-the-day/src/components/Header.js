import React from "react";

// stateless functional component
const Header = ({ tagLine, taste }) => (
  <header className="top">
    <h1>
      Hot
      <span className="ofThe">
        <span className="of">Fried</span>
        <span className="the">Chicken</span>
      </span>
      Chic
    </h1>
    <h3 className="tagline">
      <span>
        {taste} - {tagLine}
      </span>
    </h3>
  </header>
);

export default Header;
