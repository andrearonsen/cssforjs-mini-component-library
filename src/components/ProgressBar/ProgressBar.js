/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizeToBarHeight = {
  small: 8,
  medium: 12,
  large: 16,
};

const ProgressBar = ({ value, size }) => {
  const width = 370;
  let barWidth = width;
  if (size === "large") {
    barWidth = width - 8;
  }
  let Wrapper;
  if (size === "small") {
    Wrapper = SmallWrapper;
  } else if (size === "medium") {
    Wrapper = MediumWrapper;
  } else if (size === "large") {
    Wrapper = LargeWrapper;
  }

  return (
    <Wrapper width={width}>
      <Progress
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        value={value}
        barWidth={barWidth}
      ></Progress>
    </Wrapper>
  );
};

const BaseWrapper = styled.div`
  width: ${(p) => p.width + "px"};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: 0;
  border-radius: 4px;
`;

const SmallWrapper = styled(BaseWrapper)`
  height: 8px;
`;

const MediumWrapper = styled(BaseWrapper)`
  height: 12px;
`;

const LargeWrapper = styled(BaseWrapper)`
  height: 16px;
  border-radius: 8px;
  padding: 4px;
`;

const Progress = styled.div`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(p) => (p.value === 100 ? "4px" : 0)};
  border-bottom-right-radius: ${(p) => (p.value === 100 ? "4px" : 0)};
  background-color: ${COLORS.primary};
  width: ${(p) => (p.barWidth * p.value) / 100 + "px"};
  height: 100%;
`;

export default ProgressBar;
