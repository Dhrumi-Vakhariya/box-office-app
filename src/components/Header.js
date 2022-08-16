import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
