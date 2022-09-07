import React from "react";
import { FlexContainer } from "./styles.jsx";

const Button = ({color, width, height, radius, padding, margin, ...props}) => {
    return (
      <FlexContainer color={color} width={width} padding={padding} height={height} margin={margin} radius={radius} {...props}>
          {props.text}
      </FlexContainer>
    )
  }

export default Button;