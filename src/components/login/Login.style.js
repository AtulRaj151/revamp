import { styled } from '@mui/material'




export const LoginContainer = styled('div')({
   maxWidth: "480px",
   marginInline: "auto",
   marginTop: "30px",
   textAlign: 'center'

});

export const Logo = styled('h2')({
    padding: "85px 0 15px", 
    fontSize: "48px",
   
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

    background: "white",
    boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)",
});

export const BoxHeader = styled('div')({
    display: "flex",
    width: "100%",
    cursor: "pointer",
   
    
});

export const BoxContent = styled('p')({
    width: "100%",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "60px",
    "&:hover": {
        background: "#f9fbfb",
        boxShadow: "inset rgba(17, 17, 26, 0.1) 0px 1px 0px",
    }
      
    
});



