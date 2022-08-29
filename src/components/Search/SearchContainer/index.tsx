import styled from "styled-components";
import SearchInput from "../SearchInput";
import SearchList from "../SearchList";

const SearchContainer = () => {
  return (
    <SearchContainerWrap>
      <SearchInput />
      <SearchList />
    </SearchContainerWrap>
  );
};
const SearchContainerWrap = styled.div``;
export default SearchContainer;
