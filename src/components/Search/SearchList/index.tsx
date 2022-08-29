import styled from "styled-components";
import SearchCard from "../SearchCard";

const SearchList = () => {
  return (
    <SearchListWrap>
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </SearchListWrap>
  );
};
const SearchListWrap = styled.ul`
  border-right: 1px solid rgb(231, 231, 231);
  height: calc(100vh - 63px);
  width: 400px;
  overflow: scroll;
`;
export default SearchList;
