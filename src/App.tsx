import { Routes, Route } from "react-router-dom";
import Join from "./pages/join";
import GlobalStyles from "./components/common/Styles/globalStyles";
import Layout from "./components/common/Layouts";
import Main from "./pages/main";
import LoginPage from "./pages/login";
import { NavigationUtil } from "./util/navigation-util";
import Detail from "./pages/detail";
import HomePage from "./pages/homepage";
import LandingPage from "./pages/landing";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={NavigationUtil.register} element={<Join />}></Route>
          <Route path={NavigationUtil.login} element={<LoginPage />}></Route>
          <Route
            path={NavigationUtil.landing}
            element={<LandingPage />}
          ></Route>
          <Route path={NavigationUtil.homePage} element={<HomePage />}></Route>
          <Route path={NavigationUtil.main} element={<Main />}></Route>
          <Route path={NavigationUtil.detail} element={<Detail />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
