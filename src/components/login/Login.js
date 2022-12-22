import React from 'react'
import '../App.css'
import { useState } from 'react';
import { LoginContainer, Heading, Logo, Text, LoginBox, BoxHeader, BoxContent } from './Login.style'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Checkbox from '@mui/material/Checkbox';



const Login = () => {


  const [isLogin, setIsLogin] = useState(true);


  return (
    <LoginContainer>
      <Logo>Revamp</Logo>
      <Heading>For Developers</Heading>
      <Text>Pratice coding, prepare for interview and get hired</Text>
      <LoginBox>

        <BoxHeader>
          <BoxContent onClick={() => setIsLogin(false)}>SignUp</BoxContent>
          <BoxContent onClick={() => setIsLogin(true)}>LogIn</BoxContent>
        </BoxHeader>

        <Box sx={{ padding: "30px", background: "white" }}>

          {isLogin ?
          // --------------------------------- Login Section ---------------------------------
            <Box>
              <TextField
                sx={{
                  width: "100%",
                  boxShadow: "inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent",
                }}
                id="input-with-icon-textfield"
                placeholder='Your username or email'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                id="input-with-icon-textfield"
                placeholder='Your password'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: "10px",
                  padding: "12px 0"
                }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <Typography>Forgot your password?</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button variant="contained" color="success" sx={{ height: 45 }}>
                  Log In
                </Button>
              </Box>
            </Box>
            :
          // --------------------------------- Login Section ---------------------------------
            <Box>
              <TextField
                sx={{
                  width: "100%",
                  boxShadow: "inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent",
                }}
                id="input-with-icon-textfield"
                placeholder='First & Last name '
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "10px",
                }}
                id="input-with-icon-textfield"
                placeholder='Email'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                     <EmailOutlinedIcon/>
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <TextField
                sx={{
                  width: "100%",
                  m: "10px 0 20px",
                }}
                id="input-with-icon-textfield"
                placeholder='Your password'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button variant="contained" color="success" sx={{ height: 45 }}>
                  Create an acount
                </Button>
              </Box>
            </Box>
          }

        </Box>
      </LoginBox>
    </LoginContainer>
  )
}

export default Login;


