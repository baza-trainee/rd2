import styled from "@emotion/styled";

export const Pagination = styled.nav`
  margin-top: 16px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  justify-content: center;

  & .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background-color: inherit;
    border: 2px solid #fff;
    cursor: pointer;
  }

  & .swiper-pagination-bullet-active {
    background: #fff;
  }
`;
