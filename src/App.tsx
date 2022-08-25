import "./styles/global.css";

function App() {
  return (
    <Routes>
      <Route path='/join' element={<Join />}></Route>
      <Route path='/login' element={<div>.로그인</div>}></Route>
      <Route path='/' element={<div>메인페이지</div>}></Route>
    </Routes>
  );
}

export default App;
