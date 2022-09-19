import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./online-css";

export default function Online() {
  const focusRef = useRef<HTMLInputElement>(null);

  const todayDate = String(new Date().toISOString().slice(0, 10));
  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    if (focusRef.current !== null) {
      focusRef.current.focus();
    }
  }, []);

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.CreateWrapper>
        <S.TitleInput placeholder='제목' />
        <S.NumberInput
          type='number'
          min='1'
          max='6'
          placeholder='인원수 최소 1명 최대 6명'
          ref={focusRef}
        />
        <S.DateInput type='date' value={date} onChange={onChangeDate} />
        <div>tagReqestdToList</div>
        <S.Content placeholder='내용을 적어주세요' />
        <S.SubmitButton>등록하기</S.SubmitButton>
      </S.CreateWrapper>
    </S.Wrapper>
  );
}
