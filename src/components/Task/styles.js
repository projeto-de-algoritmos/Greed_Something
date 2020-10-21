import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  height: 62px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 95%;

  opacity: ${(props) => props.complete ? '0.4' : '1'};
  text-decoration: ${(props) => props.complete ? 'line-through' : 'none'};
  
  &:nth-child(4n + 1) {
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
}

&:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    rgba(255, 12, 241, 1) 0%,
    rgba(250, 0, 135, 1) 100%
  );
}

&:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
}

`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;