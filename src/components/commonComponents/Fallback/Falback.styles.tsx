import styled from "@emotion/styled";

type FallbackWrapProps = {
  blockType: boolean;
};

export const FallbackWrap = styled.div<FallbackWrapProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);

  flex-grow: ${(props) => !props.blockType && "2"};
  position: ${(props) => props.blockType && "absolute"};
  top: ${(props) => props.blockType && "0"};
  left: ${(props) => props.blockType && "0"};
  z-index: ${(props) => props.blockType && "100"};
  width: ${(props) => props.blockType && "100%"};
  height: ${(props) => (props.blockType ? "100%" : "100vh")};
  border-radius: ${(props) => props.blockType && "15px"};
`;
