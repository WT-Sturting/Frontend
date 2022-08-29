import styled from "styled-components";

const SearchCard = () => {
  return (
    <SearchCardWrap>
      <h1>스터디 이름</h1>
      <p>스터디 카테고리</p>
      <p>스터디 위치</p>
      <p>스터디 인원</p>
    </SearchCardWrap>
  );
};

const SearchCardWrap = styled.li`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid rgb(231, 231, 231);
`;

export default SearchCard;
