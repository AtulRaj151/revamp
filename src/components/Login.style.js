import { styled } from '@mui/material'
import TextField from '@mui/material/TextField';



export const LoginContainer = styled('div')({
   width: "500px",
   marginInline: "auto",
   textAlign: "center",
});

export const Logo = styled('h2')({
    padding: "60px 0 20px", 
    fontSize: "45px",
});

export const Heading = styled('h2')({
    fontWeight: 'bold',
    fontSize: "26px",
});

export const Text = styled('p')({
    fontSize: "17px",
    margin: "2px 0 40px"
});

export const LoginBox = styled('div')({
    display: "flex",
    direction: "column",
    background: "white",
    boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)",
});

export const BoxHeader = styled('div')({
    display: "flex",
    width: "100%",
});

export const BoxContent = styled('p')({
    width: "100%",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "60px",
});

export const LoginInputs = styled(TextField)({
    marginTop: "20px",
    border: '1px solid gray',
    width: "100%",
});