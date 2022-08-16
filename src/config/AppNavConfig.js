import React from "react";
import { Link } from "react-router-dom";

const AppNavConfig = () => {
  const LINKS = [
    {
      path: "/",
      title: "Home Page",
    },
    {
      path: "/starred",
      title: "Starred Page",
    },
  ];
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppNavConfig;
