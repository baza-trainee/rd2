import styled from "@emotion/styled";

export const Card = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 24px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-inline: 24px;
  padding-top: 24px;
`;
