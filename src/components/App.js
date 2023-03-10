import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "./App.style";
import {
  HOME_PATH,
  LOGIN_PATH,
  PREPARE_PATH,
  CERTIFY_PATH,
  COMPETE_PATH,
  EDITOR_PATH,
} from "../helper/routes";
import { HeaderContainer } from "./App.style";
import Header from "./header/Header";
import DashBoard from "./dashBoard/DashBoard";
import Login from "./login/Login";
import Prepare from "./prepare/Prepare";
import Certify from "./certify/Certify";
import Compete from "./compete/Compete";
import SubHeader from "./subHeader/SubHeader";
import CodeEditor from "./editor/CodeEditor";

function App() {
  const { pathname } = useLocation();
  return (
    <Container className="App" data-testid="app-container">
      {pathname !== "/login" && (
        <HeaderContainer data-testid="header-container">
          <Header />
          {pathname !== "/editor" && <SubHeader />}
        </HeaderContainer>
      )}
      <Routes>
        <Route path={HOME_PATH} element={<DashBoard />} />
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={PREPARE_PATH} element={<Prepare />} />
        <Route path={CERTIFY_PATH} element={<Certify />} />
        <Route path={COMPETE_PATH} element={<Compete />} />
        <Route path={EDITOR_PATH} element={<CodeEditor />} />
      </Routes>
    </Container>
  );
}

export default App;
