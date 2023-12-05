import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0 20px 20px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export { Wrapper };
