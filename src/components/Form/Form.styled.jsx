import styled from '@emotion/styled';

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  label {
    display: flex;
    align-items: center;
  }
  button {
    padding: 16px 10px;
    width: 40%;
  }
`;

export const NameErrorMessage = styled.div`
  padding: 10px 16px;
  border-radius: 8px;
  position: absolute;
  right: 0;
  top: 0px;
  background-color: red;
  color: white;
`;

export const NumberErrorMessage = styled.div`
  padding: 10px 16px;
  border-radius: 8px;
  position: absolute;
  right: 0;
  top: 70px;
  background-color: red;
  color: white;
`;
