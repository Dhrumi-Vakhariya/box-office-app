import React from "react";
import { useLocation } from "react-router-dom";
import { LinkStyled, NavList } from "../misc/styled";

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

const AppNavConfig = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.path}>
            <LinkStyled
              to={item.path}
              className={item.path === location.pathname ? "active" : ""}
            >
              {item.title}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default AppNavConfig;
