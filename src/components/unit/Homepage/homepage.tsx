import * as S from "./homepage-css";
import {
  faComputerMouse,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, WheelEvent } from "react";
import _ from "lodash";
import { useNavigate } from "react-router";
import { NavigationUtil } from "../../../util/navigation-util";

export default function Home() {
  const [isOnOff, setIsOnOff] = useState<boolean>(false);
  const [isBack, setIsBack] = useState<boolean>(false);

  const navigate = useNavigate();

  const onWheelEvent = _.debounce((event: WheelEvent<HTMLElement>) => {
    if (event.deltaY !== 0) {
      setIsOnOff((prev) => !prev);
    }
  }, 45);

  const onMouseEvent = () => {
    setIsBack((prev) => !prev);
  };

  const onClickEnter = () => {
    navigate(NavigationUtil.landing);
  };

  return (
    <>
      <S.Wrapper onWheel={onWheelEvent} isBack={isBack}>
        <S.LogoWrapper>
          <S.LogoImg src='logo.png' isBack={isBack} />
        </S.LogoWrapper>
        <S.MainWrapper>
          <S.LeftWrapper>
            <S.OnLabel isOnOff={isOnOff}>Offline</S.OnLabel>
            <S.OffLabel isOnOff={isOnOff}>Online</S.OffLabel>
            <S.Title isOnOff={isOnOff}>Sturting</S.Title>
          </S.LeftWrapper>
          <S.LineBreaker />
          <S.RightWrapper>
            <S.Intro>같이 공부를 시작해봐요!</S.Intro>
            {isOnOff ? (
              <>
                <S.Online>스터팅 오프라인</S.Online>
                <S.BulletListWrapper>
                  <S.List>오프라인에서 공부를 진행해보세요</S.List>
                  <S.List>동네 주민들과 공부를 시작해보세요</S.List>
                  <S.List>마음 맞는 분들과 공부를 시작하세요</S.List>
                  <S.List>다같이 공부 의지를 불태워요</S.List>
                </S.BulletListWrapper>
              </>
            ) : (
              <>
                <S.Offline>스터팅 온라인</S.Offline>
                <S.BulletListWrapper>
                  <S.List>온라인에서 공부를 진행해보세요</S.List>
                  <S.List>언제 어디서든 함께 공부를 시작해봐요</S.List>
                  <S.List>공부 지식을 함께 놔눠요 </S.List>
                  <S.List>거리적 제약이 없이 공부를 시작해봐요</S.List>
                </S.BulletListWrapper>
              </>
            )}
            <S.EnterWrapper onClick={onClickEnter}>
              <S.EnterInnerWrapper
                onMouseEnter={onMouseEvent}
                onMouseLeave={onMouseEvent}
              >
                <S.Enter>ENTER</S.Enter>
                <S.ArrowImg src='images/arrow.png' />
              </S.EnterInnerWrapper>
            </S.EnterWrapper>
          </S.RightWrapper>
        </S.MainWrapper>
        <S.ScrollWrapper onClick={onWheelEvent}>
          <S.MouseIcon icon={faComputerMouse} />
          <S.ArrowIcon icon={faAnglesDown} />
          <S.Scroll>Scroll</S.Scroll>
        </S.ScrollWrapper>
      </S.Wrapper>
    </>
  );
}
