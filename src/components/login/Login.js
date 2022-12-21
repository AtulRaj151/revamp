import React from 'react'
import {LoginContainer, Heading, Logo, Text, LoginBox, BoxHeader, BoxContent, LoginContent } from './Login.style'


const Login = () => {
  return (
    <LoginContainer>
        <Logo>Revamp</Logo>
        <Heading>For Developers</Heading>
        <Text>Pratice coding, prepare for interview and get hired</Text>
        <LoginBox>
          <BoxHeader>
            <BoxContent>SignUp</BoxContent>
            <BoxContent>LogIn</BoxContent>
          </BoxHeader>         
        </LoginBox>
    </LoginContainer>
  )
}

export default Login