import * as S from "./create-css";
import { Switch } from "antd";
import { useState } from "react";
import Online from "./online/online";
import Offline from "./offline/offline";

export default function CreateStudy() {
  const [isOnline, setIsOnline] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeToggle = (checked: boolean) => {
    console.log("checked:", checked);
    if (checked === true) {
      setIsOnline("ONLINE");
    } else {
      setIsOnline("OFFLINE");
    }
    console.log("isOnline:", isOnline);
    setIsChecked((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.Title>스터디 생성하기</S.Title>
      <S.CreateWrapper isChecked={isChecked}>
        <S.HeaderWrapper>
          <S.HeaderLabel>
            {isChecked ? "오프라인" : "온라인"} 스터디
          </S.HeaderLabel>
          <S.ToggleWrapper>
            <Switch defaultChecked onChange={onChangeToggle} />
          </S.ToggleWrapper>
        </S.HeaderWrapper>
        {isChecked ? <Offline /> : <Online />}
      </S.CreateWrapper>
    </S.Wrapper>
  );
}
