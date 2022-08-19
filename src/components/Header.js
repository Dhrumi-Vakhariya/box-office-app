import React, { memo } from "react";
import { TitleWrapper } from "../misc/styled";

const Header = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default memo(Header);
