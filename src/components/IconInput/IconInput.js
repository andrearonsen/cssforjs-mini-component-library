import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const iconConfig = {
  small: {
    iconSize: 16,
    strokeWidth: 1,
  },
  large: {
    iconSize: 24,
    strokeWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let InputWrapper;
  if (size === "small") {
    InputWrapper = SmallInput;
  } else if (size === "large") {
    InputWrapper = LargeInput;
  } else {
    throw new Error("illegal size");
  }

  const ic = iconConfig[size];

  return (
    <>
      <Wrapper style={{ "--width": width + "px" }}>
        <IconWrapper size={ic.iconSize}>
          <Icon id={icon} size={ic.iconSize} strokeWidth={ic.strokeWidth} />
        </IconWrapper>
        <InputWrapper
          type="text"
          placeholder={placeholder}
          width={width - ic.iconSize}
        />
        <VisuallyHidden>
          <label>{label}</label>
        </VisuallyHidden>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);

  &:focus {
    padding: 2px;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  margin: auto;
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};
  color: ${COLORS.gray700};
`;

const BaseInput = styled.input`
  width: ${(p) => p.width + "px"};
  border: none;

  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline: none;
  }
`;

const SmallInput = styled(BaseInput)`
  border-bottom: 1px solid ${COLORS.black};
  height: 24px;
  font-size: ${14 / 16}rem;
  padding: 4px 24px;
`;

const LargeInput = styled(BaseInput)`
  border-bottom: 2px solid ${COLORS.black};
  height: 36px;
  font-size: ${18 / 16}rem;
  padding: 8px 36px;
`;

export default IconInput;
