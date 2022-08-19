import React, { memo } from "react";
import { RadioWrapper } from "../misc/styled";

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <RadioWrapper htmlFor={restProps.id}>
      {label}
      <input {...restProps} type="radio" />
      <span />
    </RadioWrapper>
  );
};

export default memo(CustomRadio);
