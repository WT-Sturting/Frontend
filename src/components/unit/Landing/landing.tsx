import * as S from "./landing-css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Landing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    swipe: true,
    // pauseOnFocus: true,
  };

  return (
    <>
      <S.Wrapper>
        <S.SliderWrapper>
          <Slider {...settings}>
            <S.FirstImgWrapper>
              <S.FirstImg src='/images/study1.jpg' />
            </S.FirstImgWrapper>
            <S.SecondImgWrapper>
              <S.SecondImg src='/images/study2.jpg' />
            </S.SecondImgWrapper>
            <S.ThirdImgWrapper>
              <S.ThirdImg src='/images/study3.jpg' />
            </S.ThirdImgWrapper>
            <S.FourthImgWrapper>
              <S.FourthImg src='/images/online.jpg' />
            </S.FourthImgWrapper>
          </Slider>
        </S.SliderWrapper>
        <S.TitleWrapper>
          <S.Logo src='logo.png' />
          <S.FirstParagraph>온라인에서 오프라인까지 :</S.FirstParagraph>
          <S.SecondParagraph>온라인 스터티 생성: 8</S.SecondParagraph>
          <S.ThirdParagraph>오프라인 스터티 생성: 12</S.ThirdParagraph>
        </S.TitleWrapper>
        <S.InfoWrapper>
          <S.OnlineWrapper>
            <S.OnlineTitle>Online</S.OnlineTitle>
            <S.OnlineTitleKr>온라인</S.OnlineTitleKr>
            <S.BreakLine />
            <S.OnlineInfo>서울, 대전, 대구, 부산 그 어디서든</S.OnlineInfo>
          </S.OnlineWrapper>
          <S.OfflineWrapper>
            <S.OfflineTitle>Offline</S.OfflineTitle>
            <S.OffTitleKr>오프라인</S.OffTitleKr>
            <S.BreakLine />
            <S.OfflineInfo>
              오프라인으로 집중적으로 <br /> 공부 시작해보세요
            </S.OfflineInfo>
          </S.OfflineWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
}
