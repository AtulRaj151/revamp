
import { Routes, Route } from 'react-router-dom';
import { Container } from './App.style';
import  { HOME_PATH, LOGIN_PATH } from '../helper/routes'
import { HeaderContainer } from './App.style';
import Header from './header/Header';
import DashBoard from './dashBoard/DashBoard';
import Login from './login/Login';


function App() {
  return (
    <Container className="App">
      <HeaderContainer data-testid="header-container">
         <Header/>
      </HeaderContainer>

      <Routes>
         <Route path={HOME_PATH} element={<DashBoard/>} />
         <Route path={LOGIN_PATH} element={<Login/>} />
      </Routes>
    </Container>
  );
}

export default App;
