import styled from "styled-components";

const SearchInput = () => {
  return (
    <SearchInputWrap>
      <form action='submit'>
        <button className='iconButton'>
          <img src='/searchIcon.png' alt='searchIcon' />
        </button>
        <input placeholder=''></input>
      </form>
      <div className='toggleBtn'>
        <button className='btn1'>대면</button>
        <button className='btn2'>비대면</button>
      </div>
    </SearchInputWrap>
  );
};

const SearchInputWrap = styled.div`
  width: 400px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0 5px;
  border-right: 1px solid rgb(231, 231, 231);
  border-bottom: 1px solid rgb(205, 205, 205);

  .iconButton {
    width: 36px;
    height: 36px;
    padding: 5px;
  }
  img {
    width: 16px;
    height: 16px;
  }

  form {
    width: 255px;
    display: flex;
    height: 36px;
  }

  input {
    width: 205px;
    height: 36px;
    padding: 0px;
    color: rgb(34, 34, 34);
    font-size: 15px;
    border: 0px;
    background-color: transparent;
  }

  .toggleBtn {
    display: flex;
  }

  .btn1 {
    color: rgb(255, 255, 255);
    font-size: 13px;
    font-weight: 700;
    border: 0px;
    border-radius: 2px;
    background-color: #1dc078;
  }

  .btn2 {
    color: rgb(174, 174, 174);
    background-color: rgb(231, 231, 231);
    font-size: 13px;
    font-weight: 400;
    border: 0px;
    border-radius: 2px;
  }
  button {
    width: 52px;
    height: 36px;
    cursor: pointer;
  }
`;

export default SearchInput;
