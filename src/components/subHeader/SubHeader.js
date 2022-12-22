import React from 'react';
import Box from '@mui/material/Box';
import { Wrapper } from './SubHeader.style';
const SubHeader = () => {
    return (
    <Wrapper data-testid="subHeader-container">
     <Box
      sx={({theme})=>({
        width: 1,
        height: 100,
        boxShadow:'0.1px 1px 4px 0 #e7eeef',
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      })}
    />
    </Wrapper>
    )
}

export default SubHeader;