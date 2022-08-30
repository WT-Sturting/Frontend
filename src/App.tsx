import { Routes, Route } from "react-router-dom";
import Join from "./pages/join";
import GlobalStyles from "./components/common/Styles/globalStyles";
import Main from "./pages/main";
import Header from "./components/common/Layouts/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/login' element={<div>로그인</div>}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </>
  );
}

export default App;
