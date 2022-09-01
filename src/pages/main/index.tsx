import styled from "styled-components";
import Map from "../../components/common/Map";
import SearchContainer from "../../components/Search/SearchContainer";

const Main = () => {
  return (
    <MainContainer>
      <SearchContainer />
      <MapContainer>
        <Map />
      </MapContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh-143px);
`;
