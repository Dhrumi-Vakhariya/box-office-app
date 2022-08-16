import React from "react";
import AppNavConfig from "./AppNavConfig";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <AppNavConfig />
      {children}
    </div>
  );
};

export default MainLayout;
