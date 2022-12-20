
import { Routes, Route } from 'react-router-dom';
import { Container } from './App.style';
import DashBoard from './dashBoard/DashBoard';
import Header from './header/Header';
import  { HOME_PATH } from '../helper/routes'
import { HeaderContainer } from './App.style';


function App() {
  return (
    <Container className="App">
      <HeaderContainer data-testid="header-container">
         <Header/>
      </HeaderContainer>

      <Routes>
         <Route path={HOME_PATH} element={<DashBoard/>} />
      </Routes>
    </Container>
  );
}

export default App;
