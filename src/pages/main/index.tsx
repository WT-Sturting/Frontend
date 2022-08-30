import styled from "styled-components";
import Map from "../../components/Map";
import SearchContainer from "../../components/Search/SearchContainer";

const Main = () => {
  return (
    <MainContainer>
      <SearchContainer />
      <Map />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
