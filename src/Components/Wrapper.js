import React from 'react';
import { styled } from '@mui/material';

const Wrapper = styled('div')({
  maxWidth: '1240px',
  margin: '0 auto'
});

const WrapperComponent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapperComponent;
