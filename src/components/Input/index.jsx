import React from 'react';
import InputMask from 'react-input-mask';
import {FlexContainer } from './styles.jsx'

const Input = ({placeholder, onBlur, onChange, value, ref, ...props}) => {
  return (
    <FlexContainer width={props.width} height={props.height} radius_color={props.radius_color} radius={props.radius}  focus_color={props.focus_color} type={props.type}>
      <InputMask
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </FlexContainer> 
  )
}

export default Input;