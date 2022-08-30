import styled from "styled-components";

const SearchCard = () => {
  return (
    <SearchCardWrap>
      <div className='picture'>사진 or 이미지</div>
      <div className='cardContent'>
        <h1>스터디 이름</h1>
        <p>스터디 카테고리</p>
        <p>스터디 위치</p>
        <p>스터디 인원</p>
      </div>
    </SearchCardWrap>
  );
};

const SearchCardWrap = styled.li`
  display: flex;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid rgb(231, 231, 231);
  padding: 15px;

  .picture {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 170px;
    border: 1px solid rgb(231, 231, 231);
  }

  .cardContent {
    padding-left: 20px;
  }
`;

export default SearchCard;
