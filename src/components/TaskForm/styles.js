import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px;
  border: ${props => props.edit ? '2px solid #149fff' : '2px solid #5d0cff' };
  margin: 0 10px;
  outline: none;
  width: 200px;
  background: transparent;
  color: #fff;

  &::placeholder{
    color: #e2e2e2;
  }
`;

export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
`;

export const EditButton = styled.button`
  padding: 16px 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;

`;

export const TimeContainer = styled.div`
  padding: 5px;
  border-radius: 4px;
  border: ${props => props.edit ? '2px solid #149fff' : '2px solid #5d0cff' };
  margin-right: 10px;

  label, input {
    color: #fff !important;
    border: none !important;
  }
`;