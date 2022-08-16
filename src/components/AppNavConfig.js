import React from "react";
import { Link } from "react-router-dom";

const AppNavConfig = () => {
  const LINKS = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/starred",
      title: "Favourites",
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
