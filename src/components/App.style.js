import { styled } from '@mui/system';


export const Container = styled('div')({
     display: 'flex',
     flexDirection:'column',
     justifyContent: 'space-between',
     minHeight: '100vh'
  });

export const HeaderContainer = styled('div')({
     marginTop: '1%',
     position: 'fixed',
     zIndex: '1100',
     width:'101vw'
});