import * as S from "./offline-css";
import Map from "../../../common/Map";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function Offline() {
  const focusRef = useRef<HTMLInputElement>(null);

  const todayDate = String(new Date().toISOString().slice(0, 10));
  const [date, setDate] = useState(todayDate);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    if (focusRef.current !== null) {
      focusRef.current.focus();
    }
  }, []);

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const showModal = () => {
    setIsModal(true);
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsModal(false);
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  const onHandleComplete = (data: any) => {
    console.log("data:", data);
    setIsOpen((prev) => !prev);
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
        <S.AddressWrapper>
          <S.Address placeholder='주소' />
          <S.AddressButton onClick={showModal}>주소 찾기</S.AddressButton>
          {isOpen && (
            <Modal
              title='주소 찾기'
              visible={isModal}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <DaumPostcodeEmbed onComplete={onHandleComplete} />
            </Modal>
          )}
        </S.AddressWrapper>
        <S.AddressDetail placeholder='상세 주소' />
        <S.Content placeholder='내용을 적어주세요' />
      </S.CreateWrapper>
      <S.MapWrapper>
        <Map />
      </S.MapWrapper>
    </S.Wrapper>
  );
}
