import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const CreateWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TitleInput = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid #000;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    border: none;
    border-bottom: 1px solid #1dc078;
  }
`;

export const NumberInput = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid #000;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  ::placeholder {
    opacity: 0.4;
  }
  :focus {
    border: none;
    border-bottom: 1px solid #1dc078;
  }
`;

export const DateInput = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid #000;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  :focus {
    border: none;
    border-bottom: 1px solid #1dc078;
  }
`;

export const Content = styled.textarea`
  width: 320px;
  height: 160px;
  padding: 12px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const SubmitButton = styled.button`
  width: 320px;
  height: 40px;
  border: 1px solid #000;
  background-color: #1dc078;
  border-radius: 8px;
`;
