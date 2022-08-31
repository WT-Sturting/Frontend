import styled from "styled-components";

const Detail = () => {
  return (
    <DetailWrapper>
      <div className='title'>
        <h1>스터디 함께하실분 구합니다</h1>
        <div className='subTitle'>
          <div className='userName'>박준영</div>
          <div className='created-at'>2055.12.25</div>
        </div>
      </div>

      <div className='content'>
        <div className='contentList'>
          <h2>인원수</h2>
          <p>2/4명</p>
        </div>
        <div className='contentList'>
          <h2>스터디 시작일</h2>
          <p>2022.12.25</p>
        </div>
        <div className='contentList'>
          <h2>스터디 소개</h2>
          <p>
            ~~~를해서 ~~~하려고하는 @#@1321스터디입니다 @!$#@를 배우고싶어서
            만들게되었습니다.
          </p>
        </div>
      </div>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 0 auto;
  height: calc(100vh - 80px);
  max-width: 750px;
  padding: 36px 32px 32px;

  .title {
    border-bottom: 1px solid #f1f3f5;
    margin-bottom: 32px;
  }

  .title > h1 {
    font-size: 24px;
    font-weight: 500;
  }

  .subTitle {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    margin-bottom: 16px;
  }

  .userName {
    margin-right: 10px;
  }
  .created-at {
    color: #adb5bd;
  }

  .contentList {
    font-size: 16px;
    padding: 16px;
    display: flex;
    border-bottom: 1px solid rgb(245, 245, 245);
  }

  .contentList > h2 {
    width: 160px;
    font-size: 16px;
    font-weight: 700;
  }
`;
export default Detail;
