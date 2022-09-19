import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 91%;
  display: flex;
`;

export const CreateWrapper = styled.div`
  width: 50%;
  border: 1px solid #000;
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

export const AddressWrapper = styled.div`
  background-color: lightblue;
  display: flex;
  align-items: center;
`;

export const Address = styled.input`
  width: 240px;
  height: 40px;
  border: 1px solid #000;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const AddressButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  background: #1dc078;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const AddressDetail = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid #000;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  ::placeholder {
    opacity: 0.4;
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

export const MapWrapper = styled.div`
  width: 50%;
  border: 1px solid #000;
  border-radius: 6px;
  background: lightcoral;
`;
