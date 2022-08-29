import { Routes, Route } from "react-router-dom";
import Join from "./pages/join";
import GlobalStyles from "./components/common/Styles/globalStyles";
import Layout from "./components/common/Layouts";
import LoginPage from "./pages/login";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/join' element={<Join />}></Route>
          <Route path='/login' element={<div>.로그인</div>}></Route>
          <Route path='/' element={<div>메인페이지</div>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
