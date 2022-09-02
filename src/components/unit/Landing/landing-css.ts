import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SliderWrapper = styled.section`
  width: 100%;
  height: 38vh;
`;

export const FirstImgWrapper = styled.div`
  width: 100%;
  height: 38vh;
`;

export const FirstImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const SecondImgWrapper = styled.div`
  width: 100%;
  height: 38vh;
`;

export const SecondImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const ThirdImgWrapper = styled.div`
  width: 100%;
  height: 38vh;
`;

export const ThirdImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const FourthImgWrapper = styled.div`
  width: 100%;
  height: 38vh;
`;

export const FourthImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const TitleWrapper = styled.section`
  width: 100%;
  height: 45vh;
  margin: 35px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #efefef;
`;

export const Logo = styled.img`
  padding: 24px;
`;

export const FirstParagraph = styled.h1``;

export const SecondParagraph = styled.p`
  width: 440px;
  font-size: 40px;
  line-height: 100%;
`;

export const ThirdParagraph = styled.p`
  width: 440px;
  font-size: 40px;
  line-height: 100%;
`;

export const InfoWrapper = styled.section`
  width: 100%;
  height: 50vh;
  margin: 35px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Bounce = keyframes`
    0%, 100% {
        bottom: 0;
    }
    50% {
        bottom: 30px;
    }
}
`;

export const OnlineTitleKr = styled.div`
  font-size: 30px;
`;

export const OnlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  width: 308px;
  height: 282px;
  border-radius: 8px;
  box-shadow: 4px 8px 18px #1dc078;
  :hover {
    background: #1dc078;
    transition: all 0.4s linear;
    box-shadow: none;
    position: relative;
    animation: ${Bounce} 1s linear;
    color: #fff;
    ${OnlineTitleKr} {
      color: rgb(255, 225, 0);
    }
  }
`;

export const OnlineTitle = styled.div`
  font-size: 40px;
  padding: 12px 0px 0px 0px;
`;

export const OnlineInfo = styled.p`
  font-size: 20px;
  line-height: 45px;
  padding-top: 36px;
`;

export const BreakLine = styled.div`
  width: 20px;
  height: 4px;
  background: rgb(229, 229, 229);
`;

export const OffTitleKr = styled.div`
  font-size: 30px;
`;

export const OfflineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  width: 308px;
  height: 282px;
  border-radius: 8px;
  box-shadow: 4px 8px 18px #1dc078;
  :hover {
    background: #1dc078;
    transition: all 0.4s linear;
    box-shadow: none;
    position: relative;
    animation: ${Bounce} 1s linear;
    color: #fff;
    ${OffTitleKr} {
      color: rgb(255, 225, 0);
    }
  }
`;

export const OfflineTitle = styled.div`
  font-size: 40px;
  padding: 12px 0px 0px 0px;
`;

export const OfflineInfo = styled.p`
  font-size: 20px;
  line-height: 45px;
  padding-top: 24px;
`;
