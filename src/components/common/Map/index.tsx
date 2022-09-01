import { useEffect } from "react";

const Map = () => {
  const { kakao } = window as any;

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return (
    <div
      id='myMap'
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default Map;
